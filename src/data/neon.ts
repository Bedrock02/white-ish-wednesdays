// Next.js example
import postgres from 'postgres';
import { Player } from '../types';
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const conn = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
});

const getScores = async () => {
  const scores = await conn`
    SELECT Name, COUNT(*) AS records
    FROM Games
    GROUP BY Name
  `;
  const lastGame = await conn`
    SELECT * 
    FROM Games
    ORDER BY date_created DESC
    LIMIT 1;
  `;
  const lastWinner = lastGame[0].Name;
  return { scores, lastWinner };
};

export {
  getScores
}