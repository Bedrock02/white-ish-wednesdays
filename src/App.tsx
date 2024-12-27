import './App.css'
import ebro from './assets/ebro.png'
import laura from './assets/lauraStyles.png'
import rosenburg from './assets/rosenburg.png'
import djkast from './assets/djkast.png'
import shani from './assets/shani.png'

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
        <div className="personCard">
            <img src={ebro} alt="Ebro" height={200} />
            <h2>Ebro Darden</h2>
          </div>
      </div>

      <div className='scoreBoardContainer'>
        <h1>Scoreboard</h1>
        <div className="scoreBoard">
          <div className="personCard">
            <img src={ebro} alt="Ebro" height={200} />
            <h2>Ebro Darden</h2>
            <h3>0</h3>
          </div>
          <div className="personCard">
            <img src={rosenburg} alt="Peter Rosenburg" height={200}/>
            <h2>Peter Rosenberg</h2>
            <h3>0</h3>
          </div>
          <div className="personCard">
            <img src={laura} alt="Laura Styles" height={200}/>
            <h2>Laura Styles</h2>
            <h3>0</h3>
          </div>
          <div className="personCard">
            <img src={shani} alt="Shani Kulture" />
            <h2>Shani Kulture</h2>
            <h3>0</h3>
          </div>
          <div className="personCard">
            <img src={djkast} alt="DJ Kast One" height={200} />
            <h2>DJ Kast One</h2>
            <h3>0</h3>
          </div>
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
