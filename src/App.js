import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Background from './components/Background'
import FadeBar from './components/FadeBar'
import LinkBar from './components/LinkBar'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import ReplayButton from './components/ReplayButton'
import ScrollButton from './components/ScrollButton'

import Home from './views/Home'
import Projects from './views/Projects'
import Contact from './views/Contact'
import bg from './images/background2.png'
import 'animate.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='black-box' />
        <div className='screen' />

        <Background img={bg} />
        <FadeBar style={{position: 'absolute', top: 'calc(100vh - 150px)'}} />
        <FadeBar type='top' style={{top: '0px'}} />
        <FadeBar style={{bottom: '-4px'}} />
        <ScrollButton />
        <Logo />
        <Navbar />
        <LinkBar />
        <ReplayButton />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
