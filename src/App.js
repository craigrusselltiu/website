import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'animate.css'

import Navbar from './components/Navbar'
import ReplayButton from './components/ReplayButton'
import Whitespace from './components/Whitespace'
import Logo from './components/Logo'
import ScrollButton from './components/ScrollButton'
import FadeBar from './components/FadeBar'
import Background from './components/Background'
import LinkBar from './components/LinkBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Contact from './views/Contact'
import misty from './images/misty.png'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='black-box' />
        <div className='screen' />

        <Background img={misty} />

        <FadeBar style={{position: 'absolute', top: 'calc(100vh - 150px)'}} />
        <FadeBar type='top' style={{top: '0px'}} />
        <FadeBar style={{bottom: '-4px'}} />

        <ScrollButton />
        <Logo />
        <Navbar />
        <LinkBar />
        <ReplayButton />
        <Whitespace />

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
