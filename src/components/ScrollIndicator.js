import Jump from 'react-reveal/Jump'
import arrows from '../images/scroll.png'

const ScrollIndicator = () => {
    return (
        <Jump forever duration={2000}>
          <img className='scroll' src={arrows} alt='scroll' />
        </Jump>
    )
}

export default ScrollIndicator
