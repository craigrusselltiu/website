import TextCenter from '../components/TextCenter'
import TimelineDate from '../components/TimelineDate'
import TimelineProject from '../components/TimelineProject'

import demo from '../images/demo.png'
import play from '../images/play.png'
import p_quarantinder from '../images/project-quarantinder.png'
import p_radiomics from '../images/project-radiomics.png'
import p_website from '../images/project-website.png'

const Projects = () => {
    return (
        <div>
            <TimelineDate text='PRESENT' />
            <TimelineProject
                img={p_website}
                icon={demo}
                button='DEMO'
                link='https://craigrusselltiu.github.io/website/'
                source='https://github.com/craigrusselltiu/website'
                title='Portfolio Website'
                subtitle='March 2021'
                text="I created this website portfolio as a personal project to explore single-page applications, dynamic rendering, and responsive design, ultimately sharpening my React and UX/UI design abilities.
                    My goal was to have one access point to showcase all my work, as well as refresh and improve my frontend development capabilities, hitting two birds with one stone.
                    Aside from fade animations, all code and assets were designed and created by me."
                technologies='ReactJS, React Router, HTML, CSS, GitHub Pages'
            />
            <TimelineDate text='2021' />
            <TimelineProject
                img={p_quarantinder}
                icon={play}
                button='VIDEO'
                link='https://www.youtube.com/watch?v=3bilCTwv8tc'
                source='https://github.com/craigrusselltiu/quarantinder'
                title='Quarantinder'
                subtitle='December 2020'
                text="Quarantinder was a RESTful virtual dating web app project I worked on with a team.
                    The goal of the web app is to maintain social connections between people during COVID.
                    Details on my contributions can be found on the README on GitHub repository for the source code."
                technologies='Spring Boot/Java, JUnit, MySQL, Hibernate, Maven, Tomcat, Git'
            />
            <TimelineProject
                img={p_radiomics}
                priv={true}
                title='Cancer CT Analysis Tool'
                subtitle='February 2020'
                text="I designed and implemented a radiomics tool with a research partner at The Westmead Institute for Medical Research.
                    The tool utilises machine learning in analysing 3D lung cancer patient CT images, specifically ones who have undergone stereotactic radiotherapy, to predict metastasis.
                    Because the software interacts with sensitive information including patient medical records, access is prohibited."
                technologies='Python, PyTorch, SciPy, Tkinter'
            />
            <TimelineDate text='2020' />
            <TimelineProject />
            <TimelineProject />
        </div>
    )
}

export default Projects
