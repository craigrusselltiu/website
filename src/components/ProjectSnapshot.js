import ProjectButton from './ProjectButton'
import ProjectImage from './ProjectImage'

import code from '../images/icon-code.png'
import noeye from '../images/icon-noeye.png'

const ProjectSnapshot = ({ img, icon, button, link, source, priv }) => {
    if (priv) {
        return (
            <div className='content' style={{width: '500px'}}>
                <ProjectImage img={img} />
                <ProjectButton icon={noeye} text={'PRIVATE'} />
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
