import Polaroid from './Polaroid'
import TextCenter from './TextCenter'
import Fade from 'react-reveal/Fade'

const TextPhotoPair = ({ type, header, text, img, sig }) => {
    const distance = '40px'
    const delay = 200

    if (type === 'left') {
        return (
            <div className='content-wrapper'>
                <Fade left distance={distance} delay={delay}>
                    <TextCenter header={header} text={text} nofade={true} />
                </Fade>
    
                <Fade right distance={distance} delay={delay}>
                    <Polaroid img={img} sig={sig} />
                </Fade>
            </div>
        )
    }    
    return (
        <div className='content-wrapper'>
            <Fade left distance={distance} delay={delay}>
                <Polaroid img={img} sig={sig} />
            </Fade>

            <Fade right distance={distance} delay={delay}>
                <TextCenter header={header} text={text} nofade={true} />
            </Fade>
        </div>
    )
}

TextPhotoPair.defaultProps = {
    type: 'right',
    header: 'TITLE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default TextPhotoPair
