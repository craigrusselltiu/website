import Polaroid from './Polaroid'
import Fade from 'react-reveal/Fade'

const TextPhotoPair = ({ type, header, text, img, sig }) => {
    const distance = '40px'
    const delay = 200

    if (type === 'left') {
        return (
            <div className='content-wrapper'>
                <Fade left distance={distance} delay={delay}>
                    <div className='content'>
                        <div>
                            <h1 className='txt'>{header}</h1><br/>
                            <p className='txt' style={{textIndent: '45px'}}>{text}</p>
                        </div>
                    </div>
                </Fade>
    
                <Fade right distance={distance} delay={delay}>
                    <div className='content'>
                        <Polaroid img={img} sig={sig} />
                    </div>
                </Fade>
            </div>
        )
    }
    
    return (
        <div className='content-wrapper'>
            <Fade left distance={distance} delay={delay}>
                <div className='content'>
                    <Polaroid img={img} sig={sig} />
                </div>
            </Fade>

            <Fade right distance={distance} delay={delay}>
                <div className='content'>
                    <div>
                        <h1 className='txt'>{header}</h1><br/>
                        <p className='txt' style={{textIndent: '45px'}}>{text}</p>
                    </div>
                </div>
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
