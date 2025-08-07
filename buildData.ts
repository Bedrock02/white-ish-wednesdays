import * as fs from 'fs';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import { Player } from './src/types';

dotenv.config({ path: '.env.local' });
const DB_URL = process.env.NEON_DATABASE_URL

type DBResult = {
  scores: Record<string, number>,
  lastWinnerModel: Record<string, number>,
  episodeLink: string,
  last5Games: Record<string, number>[]
}
// Fetch data from the database
async function fetchData(): Promise<DBResult> {
  const sql = neon(DB_URL as string);
  const scores = await sql`
    SELECT Name, COUNT(*) AS score
    FROM Games
    WHERE EXTRACT(YEAR FROM date_created) = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY Name
  `;

  const last5Games = await sql`
    SELECT * 
    FROM Games
    WHERE EXTRACT(YEAR FROM date_created) = EXTRACT(YEAR FROM CURRENT_DATE)
    ORDER BY date_created DESC
    LIMIT 5;
  `;
  const lastGame = last5Games[0];
  const lastWinnerModel = lastGame;
  const episodeLink = lastGame.link;
  const latestScores: Record<string, number> = {};
  scores.forEach(game => {
        if (game.name === undefined) {
          return;
        }
        latestScores[game.name] = game.score;
      });
  
  return { scores: latestScores, lastWinnerModel, episodeLink, last5Games };
}

// Write data to a file
function writeToFile(filePath: string, data: { 
  scores: Record<string, number>,
  lastWinnerName: string,
  episodeLink: string,
  last5Games: Record<string, number>[] 
}): void {
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
        writeToFile('./src/data/builtTimeData.json', {
          scores: data.scores,
          lastWinnerName: (data.lastWinnerModel.name as unknown) as Player,
          episodeLink: data.episodeLink,
          last5Games: data.last5Games
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

main();
