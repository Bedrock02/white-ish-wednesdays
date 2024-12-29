import { neon } from "@neondatabase/serverless";

const { DATABASE_URL } = process.env;

const sql = neon(DATABASE_URL as string);

const getGameData = async () => {
  const scores = await sql`
    SELECT Name, COUNT(*) AS score
    FROM Games
    GROUP BY Name
  `;
  const lastGame = await sql`
    SELECT * 
    FROM Games
    ORDER BY date_created DESC
    LIMIT 1;
  `;
  const lastWinner = lastGame[0];
  const latestScores: Record<string, number> = {};
  scores.forEach(game => {
        if (game.name === undefined) {
          return;
        }
        latestScores[game.name] = game.score;
      });
  
  return { scores: latestScores, lastWinner };
};

export {
  getGameData
}