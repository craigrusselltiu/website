import noimage from '../images/no-image.png'

const ProjectImage = ({ img }) => {
    return (
        <div className='project'>
            <img className='project-img' src={img} alt='project' />
        </div>
    )
}

ProjectImage.defaultProps = {
    img: noimage,
}

export default ProjectImage
