import github from '../images/github.png'

const LinkButton = ({ img, style, link }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <button className='link-btn' style={style}>
                <img src={img} alt='link' />
            </button>
        </a>
    )
}

LinkButton.defaultProps = {
    img: github,
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}

export default LinkButton
