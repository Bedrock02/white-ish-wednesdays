export type Player = 'ebro' | 'laura' | 'shani' | 'djkast' | 'djjuan';


export interface GameSummary {
  "lastWinner": Player,
  "scores": {
    [key in Player]?: number
  },
  "last_date_modified": string,
  "episodeLink": string
}

export interface DBResult {
  scores: Record<string, number>;
  lastWinner: Record<string, number>;
}