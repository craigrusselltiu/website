import Fade from 'react-reveal/Fade'

const TimelineDate = ({ text }) => {
    return (
        <div className='timeline-circle' style={{position: 'absolute', margin: '0', left: 'calc(10vw - 10px)'}}>
            <Fade right distance={'40px'} delay={200}>
                <h1 className='txt' style={{fontFamily: 'Courier New, Courier, monospace', position: 'relative', top: '-18px', left: '50px'}}>{text}</h1>
            </Fade>
        </div>
    )
}

export default TimelineDate
