import fadetop from '../images/fade-top.png'
import fadebot from '../images/fade-bot.png'

const FadeBar = ({ type, style }) => {
    if (type === 'top') {
        return (
            <div className='fade' style={style}>
              <img className='fade-img' src={fadetop} alt='fade' />
            </div>
        )
    }

    return (
        <div className='fade' style={style}>
          <img className='fade-img' src={fadebot} alt='fade' />
        </div>
    )
}

export default FadeBar
