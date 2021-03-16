const ProjectText = ({ title, subtitle, text, technologies }) => {
    return (
        <div className='content' id='project' style={{textAlign: 'left'}}>
            <h1 className='txt' style={{marginBottom: 0}}>{title}</h1><br/>
            <h1 className='txt' style={{marginTop: 0, fontSize: '16px'}}>{subtitle}</h1><br/>
            <p className='txt' style={{textIndent: '45px'}}>{text}</p>
            <p className='txt'>
                <h1 className='txt'>TOOLS USED:</h1> {technologies}
            </p>
        </div>
    )
}

ProjectText.defaultProps = {
    title: 'Project Title',
    subtitle: 'Subtitle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🤠🤠🤠 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 🥶💎',
    technologies: 'Java, Python, C++',
}

export default ProjectText
