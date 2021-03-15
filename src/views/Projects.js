import TextCenter from '../components/TextCenter'
import TimelineProject from '../components/TimelineProject'

const Projects = () => {
    return (
        <div>
            <TextCenter header='PROJECT TIMELINE' />
            <div className='timeline-circle' style={{position: 'absolute', margin: '0', left: 'calc(10vw - 10px)'}} />
            <TimelineProject />
            <TimelineProject />
            <TimelineProject />
        </div>
    )
}

export default Projects
