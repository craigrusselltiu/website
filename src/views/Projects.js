import TextCenter from '../components/TextCenter'
import TimelineProject from '../components/TimelineProject'
import demo from '../images/demo.png'
import website from '../images/project-website.png'

const Projects = () => {
    return (
        <div>
            <TextCenter header='PROJECT TIMELINE' />
            <div className='timeline-circle' style={{position: 'absolute', margin: '0', left: 'calc(10vw - 10px)'}} />

            <TimelineProject
                img={website}
                icon={demo}
                button='DEMO'
                link='https://craigrusselltiu.github.io/website/'
                source='https://github.com/craigrusselltiu/website'
                title='Portfolio Website'
                subtitle='March 2021'
                text="I created this website portfolio as a project to explore single-page applications, dynamic rendering, and responsive design, ultimately sharpening my React and UX/UI design abilities.
                    My goal was to have one access point to showcase all my work, as well as refresh and improve my frontend development capabilities, hitting two birds with one stone."
                technologies='React, HTML, CSS, Git, GitHub Pages'
            />
            <TimelineProject />
            <TimelineProject />
        </div>
    )
}

export default Projects
