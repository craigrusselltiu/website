import TimelineDate from '../components/TimelineDate'
import TimelineProject from '../components/TimelineProject'

import eye from '../images/icon-eye.png'
import noeye from '../images/icon-noeye.png'
import video from '../images/icon-video.png'

import p_beer from '../images/project-beer.png'
import p_coffee from '../images/project-coffee.png'
import p_pvz from '../images/project-pvz.png'
import p_quarantinder from '../images/project-quarantinder.png'
import p_radiomics from '../images/project-radiomics.png'
import p_thesis from '../images/project-thesis.png'
import p_website from '../images/project-website.png'
import p_yoshi from '../images/project-yoshi.png'

const Projects = () => {
    return (
        <>
            <TimelineDate text='PRESENT' />
            <TimelineProject
                img={p_website}
                icon={eye}
                button='DEMO'
                link='https://craigrusselltiu.github.io/website/'
                source='https://github.com/craigrusselltiu/website'
                title='PORTFOLIO WEBSITE'
                subtitle='March 2021'
                text="I created this portfolio website as a personal project to explore single-page applications, dynamic rendering, and responsive design,
                    ultimately sharpening my React and UX/UI design abilities.
                    My goal was to have one access point to showcase all my work, as well as refresh and improve my frontend development capabilities, hitting two birds with one stone.
                    Aside from fading animations, all code and assets were designed and created by myself. (Resize the window and see how the website adapts!)"
                technologies='ReactJS, React Router, HTML, CSS, GitHub Pages'
            />
            <TimelineDate text='2021' />
            <TimelineProject
                img={p_thesis}
                icon={eye}
                button='READ'
                link='https://drive.google.com/file/d/1MI6_kl-o5M0dGshCegiPqw7YcHJW4h21/view?usp=sharing'
                source='https://github.com/craigrusselltiu/pca-deep-learning'
                title='THESIS PROJECT'
                subtitle='December 2020'
                text="My thesis project was mainly a research-based one that focused on improving how we classify prostate cancer aggressiveness through machine learning methods.
                    Although it did not outperform existing methods, it is one of the first projects that utilise automatic augmentation for medical images,
                    serving as a baseline for future research."
                technologies='Python, Keras, TensorFlow'
            />
            <TimelineProject
                img={p_quarantinder}
                icon={video}
                button='VIDEO'
                link='https://www.youtube.com/watch?v=3bilCTwv8tc'
                source='https://github.com/craigrusselltiu/quarantinder'
                title='QUARANTINDER'
                subtitle='November 2020'
                text="Quarantinder was a virtual dating web app project I worked on with a team.
                    The goal of the web app is to maintain social connections between people during COVID.
                    Details on my contributions as a full stack developer can be found in the README on the GitHub repository for the source code.
                    The video was produced and edited entirely by me."
                technologies='Spring Boot/Java, JUnit, MySQL, Hibernate, Maven, Tomcat, Git'
            />
            <TimelineProject
                img={p_radiomics}
                priv={true}
                title='LUNG CANCER ANALYSIS TOOL'
                subtitle='February 2020'
                text="I designed and implemented a radiomics tool with a research partner at The Westmead Institute for Medical Research.
                    The tool extracts features from the tumor of 3D lung cancer patient CT images and utilises machine learning in analysing them,
                    specifically ones who have undergone stereotactic radiotherapy, to predict metastasis.
                    Because the software interacts with sensitive information including patient medical records, public access is prohibited.
                    (Open the image in a new tab for a closer look!)"
                technologies='Python, PyTorch, SciPy, Tkinter'
            />
            <TimelineDate text='2020' />
            <TimelineProject
                img={p_beer}
                priv={true}
                title='PALE ALE'
                subtitle='November 2019'
                text="This was a beer collection web app I worked with a team on for a client.
                    I was a frontend developer for this project, where I had to quickly learned React to use on the project.
                    It has since been taken down from AWS EC2, so demo is currently unavailable."
                technologies='ReactJS, CSS, MongoDB, AWS'
            />
            {/*
                <TimelineDate text='2019' />
                The aim of this project was to recreate a simple file system, not unlike how an OS manages files. It was written entirely from scratch in C using memory allocation.
                Its implementation is simply a set of functions which can be found on GitHub, and so does not actually run as a program.
            */}
            <TimelineDate text='2019' />
            <TimelineProject
                img={p_yoshi}
                icon={video}
                button='VIDEO'
                // link='https://www.youtube.com/watch?v=3bilCTwv8tc'
                source='https://github.com/craigrusselltiu/yoshis-island'
                title="YOSHI'S ISLAND RECREATION"
                subtitle='November 2018'
                text="I worked on another personal game project where I attempted to write a basic recreation of the platforming aspect of the game Yoshi's Island using Qt Creator.
                    My goal for this project was to practically apply some concepts I learned in university, including object-oriented programming and design patterns with C++."
                technologies='C++, Qt Creator'
            />
            <TimelineDate text='2018' />
            <TimelineProject
                img={p_coffee}
                icon={noeye}
                button='N/A'
                source='https://github.com/craigrusselltiu/coffee-bot'
                title='COFFEE BOT'
                subtitle='MARCH 2017'
                text="Perhaps one of my first Java programs. It's a very simple command line application that emulates how a basic coffee shop exchange looks like.
                    It may not be groundbreaking or barely even be considered a 'project', but this marks my official decision to pursue software engineering as a career."
                technologies='Java'
            />
            <TimelineDate text='2011' />
            <TimelineProject
                img={p_pvz}
                icon={eye}
                button='DEMO'
                link='https://www.roblox.com/games/25935872/Plants-vs-Zombies-Tycoon'
                source='https://github.com/craigrusselltiu/plants-vs-zombies-tycoon'
                title='PLANTS VS. ZOMBIES TYCOON'
                subtitle='April 2010'
                text="This game was the very first coding project I completed when I was just 12 years old, and has now been played by over 1.8 million players.
                    This will always be a project that I am proud of, as it was one of the initial forces that nudged me towards the path of software engineering.
                    (Note that to actually play it will require the installation of the Roblox engine.)"
                technologies='Lua'
            />
        </>
    )
}

export default Projects
