export type Player = 'ebro' | 'laura' | 'shani' | 'djkast';


export interface GameSummary {
  "lastWinner": Player,
  "scores": {
    [key in Player]?: number
  },
  "last_date_modified": string
}

