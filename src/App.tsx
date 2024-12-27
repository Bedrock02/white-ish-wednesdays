import './App.css'
import ebro from './assets/ebro.png'
import laura from './assets/lauraStyles.png'
import rosenburg from './assets/rosenburg.png'
import djkast from './assets/djkast.png'
import shani from './assets/shani.png'
import PersonCard from './components/PersonCard';

function App() {

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
        <PersonCard image={ebro} alt={"Ebro"} name={'Ebro Darden'} />
      </div>

      <div className='scoreBoardContainer'>
        <h1>Scoreboard</h1>
        <div className="scoreBoard">
          <PersonCard image={ebro} alt={"Ebro"} name={'Ebro Darden'} score={0}/>
          <PersonCard image={rosenburg} alt={"Peter Rosenburg"} name={'Peter Rosenburg'} score={0}/>
          <PersonCard image={laura} alt={"Laura Styles"} name={'Laura Styles'} score={0}/>
          <PersonCard image={shani} alt={"Shani Kulture"} name={'Shani Kulture'} score={0}/>
          <PersonCard image={djkast} alt={"DJ Kast One"} name={'DJ Kast One'} score={0}/>
        </div>
      </div>
      <div>
        <h5>Last Updated: 12/16/24</h5>
      </div>
      <footer></footer>
    </>
  )
}

export default App
