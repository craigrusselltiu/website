import github from '../images/github.png'

const LinkButton = ({ img, style, link, download, tooltip }) => {
    if (download) {
        return (
            <a href={link} download>
                <button className='link-btn' style={style}>
                    <img src={img} alt='link' />
                    <div className='tooltip'>{tooltip}</div>
                </button>
            </a>
        )
    }
    
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <button className='link-btn' style={style}>
                <img src={img} alt='link' />
                <div className='tooltip'>{tooltip}</div>
            </button>
        </a>
    )
}

LinkButton.defaultProps = {
    img: github,
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}

export default LinkButton
