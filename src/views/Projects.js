import TimelineDate from '../components/TimelineDate'
import TimelineProject from '../components/TimelineProject'
import * as images from '../images'

const Projects = () => {
    return (
        <>
            <TimelineDate text='PRESENT' />
            <TimelineProject
                img={images.p_website}
                icon={images.eye}
                button='DEMO'
                link='https://craigrusselltiu.github.io/website/'
                source='https://github.com/craigrusselltiu/website'
                title='PORTFOLIO WEBSITE'
                subtitle='March 2021'
                text="I created this portfolio website as a personal project to explore single-page applications, dynamic rendering, and responsive design,
                    ultimately sharpening my React and frontend UX/UI design abilities. (Resize the window and see the website adapt!)"
                technologies='ReactJS, React Router, HTML, CSS, GitHub Pages, Paint.NET'
            />
            <TimelineDate text='2021' />
            <TimelineProject
                img={images.p_quarantinder}
                icon={images.video}
                button='VIDEO'
                link='https://www.youtube.com/watch?v=3bilCTwv8tc'
                source='https://github.com/craigrusselltiu/quarantinder'
                title='QUARANTINDER'
                subtitle='November 2020'
                text="Quarantinder was a virtual dating web app I worked on with a team, with the goal of maintatining social connections between people during COVID."
                technologies='Spring Boot, JSP, JUnit, MySQL, Hibernate, Maven, Tomcat, Git'
            />
            <TimelineProject
                img={images.p_radiomics}
                priv={true}
                title='LUNG CANCER ANALYSIS TOOL'
                subtitle='February 2020'
                text="I designed and implemented a medical application at The Westmead Institute for Medical Research,
                    to help radiologists analyse tumors of lung cancer patients who have undergone stereotactic radiotherapy to predict possible recurrence.
                    Because the software interacts with sensitive information including patient medical records, public access is prohibited."
                technologies='Python, PyTorch, SciPy, Tkinter, Unittest'
            />
            <TimelineDate text='2020' />
            <TimelineProject
                img={images.p_beer}
                icon={images.noeye}
                button='N/A'
                source='https://github.com/craigrusselltiu/paleale'
                title='PALE ALE'
                subtitle='November 2019'
                text="Pale Ale was a beer collection web app I worked on for a client where I quickly learned React, which allowed users to log, store, track, and manage their personal beer collections.
                    The AWS EC2 instance has since been taken down, so demo is currently unavailable."
                technologies='ReactJS, TypeScript, Bootstrap, Tailwind CSS, CSS, HTML, Bitbucket'
            />
            <TimelineDate text='2019' />
            <TimelineProject
                img={images.p_yoshi}
                icon={images.video}
                button='VIDEO'
                link='https://www.youtube.com/watch?v=6dfx9lR2tgI'
                source='https://github.com/craigrusselltiu/yoshis-island'
                title="YOSHI'S ISLAND JUMP!"
                subtitle='November 2018'
                text="This was another personal game project inspired by the game Yoshi's Island using Qt Creator, and is similar to games like Flappy Bird.
                    My goal for this project was to practically apply some concepts I learned in university, including object-oriented programming and design patterns with C++."
                technologies='C++, Qt Creator'
            />
            <TimelineDate text='2011' />
            <TimelineProject
                img={images.p_pvz}
                icon={images.eye}
                button='DEMO'
                link='https://www.roblox.com/games/25935872/Plants-vs-Zombies-Tycoon'
                source='https://github.com/craigrusselltiu/plants-vs-zombies-tycoon'
                title='PLANTS VS. ZOMBIES TYCOON'
                subtitle='April 2010'
                text="This game was the very first coding project I completed when I was just 12 years old, and has now been played by over 1.8 million players.
                    I will always be proud of this project, as it was the main force that inspired me to pursue software engineering."
                technologies='Lua, Roblox Engine'
            />
        </>
    )
}

export default Projects
