import noimage from '../images/no-image.png'

const ProjectImage = ({ img }) => {
    return (
        <div className='content'>
            <div className='project'>
                <img className='project-img' src={img} alt='img' />
            </div>
            <button className='project-btn'>
                <p className='txt-btn' style={{margin: 'auto'}}>VIDEO</p>
            </button>
            <button className='project-btn'>
                <p className='txt-btn' style={{margin: 'auto'}}>DEMO</p>
            </button>
            <button className='project-btn'>
                <p className='txt-btn' style={{margin: 'auto'}}>CODE</p>
            </button>
        </div>
    )
}

ProjectImage.defaultProps = {
    img: noimage,
}

export default ProjectImage
