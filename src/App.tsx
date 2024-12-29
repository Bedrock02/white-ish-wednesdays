import './App.css'
import ebro from './assets/ebro.png'
import laura from './assets/lauraStyles.png'
import djkast from './assets/djkast.png'
import shani from './assets/shani.png'
import PersonCard from './components/PersonCard';
import { useEffect, useState } from 'react';
import sample from './data/games';
import { GameSummary, Player } from './types';



const  App = () => {
  const [data, setData] = useState<GameSummary | undefined>(sample);
  const [lastWinner, setLastWinner] = useState<Player | undefined>(undefined);
  const [sortedScores, setSortedScores] = useState<[string, number][]>([]);
  

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    const { lastWinner, scores } = data;
    const sortedGames = Object.entries(scores).sort(
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
      <div>
        <h5>Last Updated: {new Date(data.last_date_modified).toLocaleDateString()}</h5>
      </div>
      <footer></footer>
    </>
  )
}

export default App
