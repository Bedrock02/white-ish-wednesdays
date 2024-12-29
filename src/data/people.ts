import { Player } from "../types";

const playerIdToName: { [key in Player]: string } = {
  'ebro': 'Ebro Darden',
  'laura': 'Laura Styles',
  'shani': 'Shani Kulture',
  'djkast': 'DJ Kast One',
}

const populateMissingScores = (scores: Record<string, number>) => {
  const players = Object.keys(playerIdToName);
  const newScores = { ...scores };
  players.forEach(player => {
    if (!newScores[player]) {
      newScores[player] = 0 as number;
    }
  });
  console.log(newScores);
  return newScores;
}

export {
  playerIdToName,
  populateMissingScores
};