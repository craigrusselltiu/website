import ProjectText from './ProjectText'
import ProjectSnapshot from './ProjectSnapshot'
import Fade from 'react-reveal/Fade'

const TimelineProject = ({ img, icon, button, link, source, priv, title, subtitle, text, technologies }) => {
    return (
        <div className='content-wrapper'>
            <div className='timeline-line'>
                <div className='timeline-circle' />
            </div>

            <Fade right distance={'40px'} delay={200}>
                <ProjectSnapshot img={img} icon={icon} button={button} link={link} source={source} priv={priv} />
                <ProjectText title={title} subtitle={subtitle} text={text} technologies={technologies} />
            </Fade>
        </div>
    )
}

export default TimelineProject
