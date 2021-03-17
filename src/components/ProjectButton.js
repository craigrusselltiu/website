const ProjectButton = ({ icon, text, link }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <button className='project-btn'>
                <img className='link-btn' src={icon} alt='icon' style={{
                    position: 'relative',
                    top: '2px',
                    left: '-12px',
                    margin: 0
                }} />
                <p className='txt-btn' style={{
                    position: 'relative',
                    top: '-5px',
                    left: '5px',
                    margin: 0
                }}>{text}</p>
            </button>
        </a>
    )
}

ProjectButton.defaultProps = {
    text: 'BUTTON',
}

export default ProjectButton
