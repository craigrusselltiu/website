import Fade from 'react-reveal/Fade'
import IconList from '../components/IconList'
import Quote from '../components/Quote'
import TextPhotoPair from '../components/TextPhotoPair'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'

import * as images from '../images'

const Home = () => {
    const languages = [
        {icon: images.python, text: 'Python'},
        {icon: images.java, text: 'Java'},
        {icon: images.c, text: 'C'},
        {icon: images.cpp, text: 'C++'},
        {icon: images.css, text: 'CSS'},
        {icon: images.html, text: 'HTML5'},
        {icon: images.javascript, text: 'JavaScript'},
        {icon: images.typescript, text: 'TypeScript'},
        {icon: images.sql, text: 'SQL'},
        {icon: images.lua, text: 'Lua'},
        {icon: images.r, text: 'R'},
        {icon: images.matlab, text: 'MATLAB'},
    ]

    const frameworks = [
        {icon: images.react, text: 'React'},
        {icon: images.tailwind, text: 'Tailwind'},
        {icon: images.bootstrap, text: 'Bootstrap'},
        {icon: images.spring, text: 'Spring Boot'},
        {icon: images.junit, text: 'JUnit'},
        {icon: images.unittest, text: 'Python Unittest'},
    ]

    const other = [
        {icon: images.mysql, text: 'MySQL'},
        {icon: images.mongodb, text: 'MongoDB'},
        {icon: images.neo4j, text: 'Neo4j'},
        {icon: images.aws, text: 'AWS'},
        {icon: images.tomcat, text: 'Tomcat'},
        {icon: images.maven, text: 'Maven'},
        {icon: images.hibernate, text: 'Hibernate'},
        {icon: images.github, text: 'GitHub'},
        {icon: images.bitbucket, text: 'Bitbucket'},
        {icon: images.vscode, text: 'Visual Studio Code'},
    ]

    return (
        <>
            <TextPhotoPair
                header='MORE THAN JUST A CODE MONKEY'
                text="Hey! My name's Craig and I'm a passionate software engineer. I'm a people person, problem solver, and a naturally techy guy —
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

            <TextPhotoPair
                type='left'
                header="WHEN I'M NOT HACKING INTO THE MAINFRAME"
                text="In my spare time I like to travel and explore new things (admittedly mostly for food) and play the piano to wind down and destress.
                    I've also recently been keeping up with whatever Elon Musk is up to, as I'm sure that he's got some sort of an evil master plan.
                    Working on cool side projects like this portfolio is something that I enjoy doing as well, keeping me sharp and on my toes at all times."
                img={pic2}
                sig={'Kyoto, 2018'}
            />

            <Quote text={'"Here\'s the thing about time; if you can\'t make the most out of any given moment, you don\'t deserve a single extra second." — Ekko, The Boy Who Shattered Time'} />
        </>
    )
}

export default Home
