import TimelineDate from '../components/TimelineDate'
import TimelineProject from '../components/TimelineProject'

import demo from '../images/demo.png'
import eye from '../images/private.png'
import play from '../images/play.png'
import p_beer from '../images/project-beer.png'
import p_file from '../images/project-file.png'
import p_pvz from '../images/project-pvz.png'
import p_quarantinder from '../images/project-quarantinder.png'
import p_radiomics from '../images/project-radiomics.png'
import p_thesis from '../images/project-thesis.png'
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
                title='PORTFOLIO WEBSITE'
                subtitle='March 2021'
                text="I created this portfolio website as a personal project to explore single-page applications, dynamic rendering, and responsive design, ultimately sharpening my React and UX/UI design abilities.
                    My goal was to have one access point to showcase all my work, as well as refresh and improve my frontend development capabilities, hitting two birds with one stone.
                    Aside from fading animations, all code and assets were designed and created by me."
                technologies='ReactJS, React Router, HTML, CSS, GitHub Pages'
            />
            <TimelineDate text='2021' />
            <TimelineProject
                img={p_thesis}
                icon={demo}
                button='READ'
                link='https://drive.google.com/file/d/1MI6_kl-o5M0dGshCegiPqw7YcHJW4h21/view?usp=sharing'
                source='https://github.com/craigrusselltiu/pca-deep-learning'
                title='THESIS PROJECT'
                subtitle='December 2020'
                text="My thesis project was mainly a research-based one that focused on improving how we classify prostate cancer aggressiveness through machine learning methods.
                    Although it did not outperform existing methods, it is one of the first projects that utilise automatic augmentation for medical images, serving as a baseline for future research."
                technologies='Python, Keras, TensorFlow'
            />
            <TimelineProject
                img={p_quarantinder}
                icon={play}
                button='VIDEO'
                link='https://www.youtube.com/watch?v=3bilCTwv8tc'
                source='https://github.com/craigrusselltiu/quarantinder'
                title='QUARANTINDER'
                subtitle='November 2020'
                text="Quarantinder was a RESTful virtual dating web app project I worked on with a team.
                    The goal of the web app is to maintain social connections between people during COVID.
                    Details on my contributions as a full stack developer can be found in the README on the GitHub repository for the source code."
                technologies='Spring Boot/Java, JUnit, MySQL, Hibernate, Maven, Tomcat, Git'
            />
            <TimelineProject
                img={p_radiomics}
                priv={true}
                title='LUNG CANCER ANALYSIS TOOL'
                subtitle='February 2020'
                text="I designed and implemented a radiomics tool with a research partner at The Westmead Institute for Medical Research.
                    The tool utilises machine learning in analysing 3D lung cancer patient CT images, specifically ones who have undergone stereotactic radiotherapy, to predict metastasis.
                    Because the software interacts with sensitive information including patient medical records, public access is prohibited."
                technologies='Python, PyTorch, SciPy, Tkinter'
            />
            <TimelineDate text='2020' />
            <TimelineProject
                img={p_beer}
                priv={true}
                title='PALE ALE'
                subtitle='November 2019'
                text="This was a beer collection web app I worked on for a client.
                    I was a frontend developer for this project, where I had to quickly learned React to use on the project.
                    The project has since been taken down from AWS EC2, so demo is currently unavailable."
                technologies='ReactJS, CSS, MongoDB, AWS'
            />
            <TimelineProject
                img={p_file}
                icon={eye}
                button='N/A'
                source='https://github.com/craigrusselltiu/file-system'
                title='FILE SYSTEM'
                subtitle='June 2019'
                text="The aim of this project was to recreate a simple file system, not unlike how an OS manages files.
                    It was written entirely from scratch in C using memory allocation.
                    Its implementation is simply a set of functions which can be found on GitHub, and so does not actually run as a program."
                technologies='C'
            />
            <TimelineDate text='2011' />
            <TimelineProject
                img={p_pvz}
                icon={demo}
                button='DEMO'
                link='https://www.roblox.com/games/25935872/Plants-vs-Zombies-Tycoon'
                source='https://github.com/craigrusselltiu/plants-vs-zombies-tycoon'
                title='PLANTS VS ZOMBIES TYCOON'
                subtitle='April 2010'
                text="This game was the very first coding project I undertook when I was younger, and has now been played by over 1.8 million players.
                    This will always be a project that I am proud of, as it was one of the initial forces that nudged me towards the path of software engineering.
                    Note that to actually play it will require the installation of the Roblox engine."
                technologies='Lua'
            />
        </div>
    )
}

export default Projects
