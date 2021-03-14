import Fade from 'react-reveal/Fade'

const TextCenter = ({ header, text }) => {
    return (
        <Fade up distance={'40px'} delay={100}>
            <div className='content'>
                <h1 className='txt'>{header}</h1><br/>
                <p className='txt' style={{textIndent: '45px'}}>{text}</p>
            </div>
        </Fade>
    )
}

TextCenter.defaultProps = {
    header: 'TITLE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default TextCenter
