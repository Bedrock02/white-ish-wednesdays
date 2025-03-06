import './App.css'
import PersonCard from './components/PersonCard';
import { useEffect, useState } from 'react';
import { GameSummary, Player } from './types';
import { populateMissingScores } from './data/people';
import dbData from './data/builtTimeData.json'

const SHOW_LINK = "https://open.spotify.com/embed/episode/01VVPsDXUDNmJi2AnsmMts?utm_source=generator&t=3128641";

const  App = () => {
  const [data, setData] = useState<GameSummary | undefined>(undefined);
  const [lastWinner, setLastWinner] = useState<Player | undefined>(undefined);
  const [sortedScores, setSortedScores] = useState<[string, number][]>([]);
  
  
  useEffect(() => {  
    const convertedScores: Record<string, number> = {};
    Object.entries(dbData.scores).forEach((record) => {
      convertedScores[record[0] as Player] = record[1] as unknown as number;
    });
    
    setData({
      lastWinner: dbData.lastWinner.name as Player,
      scores: convertedScores,
      last_date_modified: dbData.lastWinner.date_created
    })
  }, []);


  useEffect(() => {
    if (data === undefined) {
      return;
    }
    const { lastWinner, scores } = data;
    const newScores = populateMissingScores(scores);
    const sortedGames = Object.entries(newScores).sort(
      (a, b) => (b[1] as number) - (a[1] as number));
    setLastWinner(lastWinner);
    setSortedScores(sortedGames)
  }, [data]);

  if (data === undefined || lastWinner === undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 className="appTitle">White-ish Wednesdays</h1>
      <div>
        <iframe style={{ "borderRadius": "12px"}} src={SHOW_LINK} width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <h3 className="caption">
          Join Ebro, Laura, Rosenberg, Shani Kulture & DJ Kast One as they battle to a race of 5 songs they recognized with the help of our phone a FOTS (Friend Of The Show)
        </h3>
      </div>
      <div className="lastWinner">
        <h2>Last Winner</h2>
        <PersonCard player={lastWinner} />
      </div>

      <div className='scoreBoardContainer'>
        <h1>Scoreboard</h1>

        <div className="scoreBoard">
          {sortedScores.map(([player, score]) => (
            <PersonCard key={player} player={player as Player} score={score} />
          ))}
        </div>
      </div>
      <div className="lastUpdated">
        <h5>Last Updated: {new Date(data.last_date_modified).toLocaleDateString()}</h5>
      </div>
      <div className="playlist">
        <iframe style={{"borderRadius": "12px"}} src="https://open.spotify.com/embed/playlist/7LYwryDn5nbyLa479Z5mJm?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <footer className="footer">
        <h4>Copyright © 2025</h4>
      </footer>
    </>
  )
}

export default App
