import Fade from 'react-reveal/Fade'
import misty from '../images/misty.png'

const TextPhotoPair = ({ type, header, text, img }) => {
    const distance = '40px'
    const delay = 200

    if (type === 'left') {
        return (
            <div className='content-parent'>
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
                        <div className='polaroid' style={{transform: 'rotate(3deg)'}}>
                            <img className='polaroid-img' src={img} alt='bg' />
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
    
    return (
        <div className='content-parent'>
            <Fade left distance={distance} delay={delay}>
                <div className='content'>
                    <div className='polaroid'>
                        <img className='polaroid-img' src={img} alt='bg' />
                    </div>
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
    img: misty,
}

export default TextPhotoPair
