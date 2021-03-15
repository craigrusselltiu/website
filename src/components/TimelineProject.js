import TextCenter from './TextCenter'
import ProjectImage from './ProjectImage'
import Fade from 'react-reveal/Fade'

const TimelineProject = () => {
    return (
        <div className='content-wrapper'>
            <div className='timeline-line' />
            <div className='timeline-circle' />
            <Fade right distance={'40px'} delay={200}>
                <ProjectImage />
                <TextCenter nofade={true} />
            </Fade>
        </div>
    )
}

export default TimelineProject
