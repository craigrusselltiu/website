import ProjectButton from './ProjectButton'
import ProjectImage from './ProjectImage'
import eye from '../images/private.png'
import code from '../images/code.png'

const ProjectSnapshot = ({ img, icon, button, link, source, priv }) => {
    if (priv) {
        return (
            <div className='content' style={{width: '500px'}}>
                <ProjectImage img={img} />
                <ProjectButton icon={eye} />
            </div>
        )
    }
    
    return (
        <div className='content' style={{width: '500px'}}>
            <ProjectImage img={img} />
            <ProjectButton icon={icon} text={button} link={link} />
            <ProjectButton icon={code} text={'SOURCE'} link={source} />
        </div>
    )
}

export default ProjectSnapshot
