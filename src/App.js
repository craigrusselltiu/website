import Navbar from './components/Navbar'
import Home from './views/Home'
import Projects from './views/Projects'
import Contact from './views/Contact'
import ReplayButton from './components/ReplayButton'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import fadetop from './images/fade-top.png'
import fadebot from './images/fade-bot.png'
import arrows from './images/scroll.png'
import misty from './images/misty.png'
import craig from './images/craig.png'

import 'animate.css'
import './index.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='black-box' />

        <div className='screen' />

        <div className='fade' style={{position: 'absolute', top: 'calc(100vh - 150px)'}}>
          <img src={fadebot} alt='fade' />
        </div>

        <div className='background'>
          <img src={misty} alt='bg' />
        </div>

        <div className='fade' style={{top: '0px'}}>
          <img src={fadetop} alt='fade' />
        </div>

        <div className='fade' style={{bottom: '-4px'}}>
          <img src={fadebot} alt='fade' />
        </div>

        <Jump forever duration={2000}>
          <img className='scroll' src={arrows} alt='scroll' style={{width: 36, height: 36}} />
        </Jump>
        
        <Fade up distance={'40px'} delay={1000}>
          <div className='title'>
            <img src={craig} alt='craig' style={{width: '42vw'}} />
          </div>
        </Fade>

        <Navbar />
        <ReplayButton />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2 className='txt'>Thanos did nothing wrong.</h2>
      </div>
    </Router>
  );
}

export default App
