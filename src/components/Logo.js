import Fade from 'react-reveal/Fade'

import craig from '../images/craig.png'

const Logo = () => {
    return (
        <Fade up distance={'50px'} delay={1000}>
          <div className='title'>
            <img src={craig} alt='craig' style={{maxWidth: '800px', width: '50vw'}} />
          </div>
        </Fade>
    )
}

export default Logo
