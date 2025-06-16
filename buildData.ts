import * as fs from 'fs';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const DB_URL = process.env.NEON_DATABASE_URL

// Fetch data from the database
async function fetchData(): Promise<{ 
  scores: Record<string, number>,
  lastWinner: Record<string, number> 
  episodeLink: string
}> {
  const sql = neon(DB_URL as string);
  const scores = await sql`
    SELECT Name, COUNT(*) AS score
    FROM Games
    WHERE EXTRACT(YEAR FROM date_created) = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY Name
  `;
  const lastGame = await sql`
    SELECT * 
    FROM Games
    WHERE EXTRACT(YEAR FROM date_created) = EXTRACT(YEAR FROM CURRENT_DATE)
    ORDER BY date_created DESC
    LIMIT 1;
  `;
  const lastWinner = lastGame[0];
  const episodeLink = lastWinner.link;
  const latestScores: Record<string, number> = {};
  scores.forEach(game => {
        if (game.name === undefined) {
          return;
        }
        latestScores[game.name] = game.score;
      });
  
  return { scores: latestScores, lastWinner, episodeLink };
}

// Write data to a file
function writeToFile(filePath: string, data: { scores: Record<string, number>; lastWinner: Record<string, number>; }): void {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File has been written successfully.');
        }
    });
}

// Main function
async function main() {
    try {
        const data = await fetchData();
        writeToFile('./src/data/builtTimeData.json', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

main();
