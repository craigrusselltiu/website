import TextCenter from '../components/TextCenter'
import TextPhotoPair from '../components/TextPhotoPair'

import pic1 from '../images/pic1.png'

const Home = () => {
    return (
        <>
            <TextPhotoPair
                header='MORE THAN JUST A CODE MONKEY'
                text="Hey! My name's Craig and I'm a software engineer. I'm a passionate programmer, people person, problem solver, and a naturally techy guy —
                    I mean, it's kind of hard not to be when you've grown up with computers everywhere.
                    Technology has always and will always pique my interest, but at the end of the day I'm just a regular guy who happens to love coding.
                    (Hover over the polaroids!)"
                img={pic1}
                sig={'Osaka, 2018'}
            />
            <TextPhotoPair type='left' />
            <TextCenter />
            <TextPhotoPair />
            <TextCenter />
        </>
    )
}

export default Home
