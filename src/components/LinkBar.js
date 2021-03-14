import Fade from 'react-reveal/Fade'
import LinkButton from './LinkButton'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'

const LinkBar = () => {
    return (
        <Fade left distance={'30px'} delay={3000}>
            <div className='linkbar'>
                <LinkButton img={github} link={'https://github.com/craigrusselltiu'} />
                <LinkButton img={linkedin} link={'https://www.linkedin.com/in/craig-tiu/'} />
                <LinkButton img={gmail} />
            </div>
        </Fade>
    )
}

export default LinkBar
