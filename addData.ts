import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import { Player } from './src/types';


dotenv.config({ path: '.env.local' });
const DB_URL = process.env.NEON_DATABASE_URL

import * as readline from 'readline';

const addData = async (player: Player) => {
  const sql = neon(DB_URL as string);
  sql`INSERT INTO games (name) VALUES (${player})`
    .then(() => {
        console.log("Win Recorded");
    }).catch((error) => {
        console.error("Error recording win:", error);
    });
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const players: Player[] = ["ebro", "laura", "shani", "djkast"];

players.forEach((player, index) => {
    console.log(`${index + 1}. ${player}`);
});

rl.question('Enter the number corresponding to your player choice: ', (answer) => {
    const choice = parseInt(answer, 10);
    if (isNaN(choice) || choice < 1 || choice > 4) {
        console.error('Invalid choice. Please enter a number between 1 and 4.');
    } else {
        console.log(`Adding a win to: ${players[choice - 1]}`);
    }
    rl.close();

    addData(players[choice - 1]);
});

