import Fade from 'react-reveal/Fade'

const Quote = ({ text }) => {
    return (
        <Fade up distance={'40px'} delay={200}>
            <div className='content' style={{width: '70vw', maxWidth: '70vw'}}>
                <p className='txt' style={{
                    fontStyle: 'italic',
                    fontFamily: 'Lucida',
                    fontSize: '28px',
                    margin: '150px auto',
                    textIndent: '60px',
                }}>{text}</p>
            </div>
        </Fade>
    )
}

export default Quote
