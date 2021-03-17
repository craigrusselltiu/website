import Fade from 'react-reveal/Fade'

import LinkButton from './LinkButton'

import myResume from '../resume/resume.pdf'
import github from '../images/icon-github.png'
import linkedin from '../images/icon-linkedin.png'
import resume from '../images/icon-resume.png'

const LinkBar = () => {
    return (
        <Fade left distance={'30px'} delay={3000}>
            <div className='linkbar'>
                <LinkButton img={github} link={'https://github.com/craigrusselltiu'} tooltip='GitHub' />
                <LinkButton img={linkedin} link={'https://www.linkedin.com/in/craig-tiu/'} tooltip='LinkedIn' />
                <LinkButton img={resume} link={myResume} download={true} tooltip='Resume' />
            </div>
        </Fade>
    )
}

export default LinkBar
