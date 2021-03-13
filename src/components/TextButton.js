import { Link } from 'react-router-dom'

const TextButton = ({ text }) => {
    const redirect = () => {
        console.log(text)
    }

    if (text === 'home') {
        return (
            <Link to={'/'} className='txt-btn' onClick={redirect}>{text}</Link>
        )
    }
    return (
        <Link to={'/'+text} className='txt-btn' onClick={redirect}>{text}</Link>
    )
}

export default TextButton
