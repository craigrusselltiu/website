import { Link } from 'react-router-dom'

const TextButton = ({ text }) => {
    const redirect = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
    }

    if (text === 'homepage') {
        return (
            <Link to={'/'} className='txt-btn' onClick={redirect}>{text}</Link>
        )
    }
    return (
        <Link to={'/'+text} className='txt-btn' onClick={redirect}>{text}</Link>
    )
}

export default TextButton
