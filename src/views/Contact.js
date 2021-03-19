import Fade from 'react-reveal/Fade'
import IconList from '../components/IconList'
import TextCenter from '../components/TextCenter'
import * as images from '../images'

const Contact = () => {
    const contacts = [
        {icon: images.github, text: 'github.com/craigrusselltiu'},
        {icon: images.linkedin, text: 'linkedin.com/in/craig-tiu'},
        {icon: images.gmail, text: 'craigrusselltiu@gmail.com'},
    ]

    return (
        <>
            <TextCenter
                header='CONTACT'
                text="If you would like to reach out and have a chat with me, just shoot me an email or click the email button on the bar towards the left side of the page.
                    I look forward to speaking with you soon!"
            />
            <div className='content'>
                <Fade up distance={'40px'} delay={200}>
                    <IconList header="HOW TO REACH ME" list={contacts} />
                </Fade>
            </div>
        </>
    )
}

export default Contact
