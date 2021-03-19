import Fade from 'react-reveal/Fade'
import IconList from '../components/IconList'
import TextCenter from '../components/TextCenter'
import TextPhotoPair from '../components/TextPhotoPair'
import pic1 from '../images/pic1.png'

import * as images from '../images'

const Home = () => {
    const languages = [
        {icon: images.python, text: 'Python'},
        {icon: images.eye, text: 'Java'},
        {icon: images.eye, text: 'C'},
        {icon: images.eye, text: 'C++'},
        {icon: images.eye, text: 'C#'},
        {icon: images.eye, text: 'SQL'},
        {icon: images.eye, text: 'HTML5'},
        {icon: images.eye, text: 'CSS'},
        {icon: images.eye, text: 'JavaScript'},
        {icon: images.eye, text: 'Lua'},
        {icon: images.eye, text: 'R'},
        {icon: images.eye, text: 'Assembly'},
        {icon: images.eye, text: 'MATLAB'},
    ]

    const frameworks = [
        {icon: images.react, text: 'React'},
        {icon: images.eye, text: 'Bootstrap'},
        {icon: images.eye, text: 'Spring Boot'},
        {icon: images.eye, text: 'JUnit'},
        {icon: images.eye, text: 'Selenium'},
        {icon: images.eye, text: 'Python Unittest'},
    ]

    const other = [
        {icon: images.eye, text: 'MySQL'},
        {icon: images.eye, text: 'MongoDB'},
        {icon: images.eye, text: 'Neo4j'},
        {icon: images.eye, text: 'AWS'},
        {icon: images.eye, text: 'Tomcat'},
        {icon: images.eye, text: 'Maven'},
        {icon: images.eye, text: 'Hibernate'},
        {icon: images.github, text: 'GitHub'},
        {icon: images.eye, text: 'Bitbucket'},
        {icon: images.eye, text: 'Visual Studio Code'},
    ]

    return (
        <>
            <TextPhotoPair
                header='MORE THAN JUST A CODE MONKEY'
                text="Hey! My name's Craig and I'm a software engineer. I'm a passionate programmer, people person, problem solver, and a naturally techy guy —
                    I mean, it's kind of hard not to be when you've grown up with computers everywhere.
                    Technology has always and will always pique my interest, but at the end of the day I'm just a regular guy who happens to love coding. (Hover over the polaroids!)"
                img={pic1}
                sig={'Osaka, 2018'}
            />
            
            <div className='content-wrapper'>
                <Fade up distance={'40px'} delay={200}>
                    <IconList header="LANGUAGES" list={languages} />
                    <IconList header="FRAMEWORKS" list={frameworks} />
                    <IconList header="OTHER" list={other} />
                </Fade>
            </div>
            
            <TextPhotoPair type='left' />
            <TextCenter />
        </>
    )
}

export default Home
