import Jump from 'react-reveal/Jump'
import arrows from '../images/scroll.png'

const ScrollButton = () => {
    const redirect = () => {
      window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
    }

    return (
      <Jump forever duration={2000}>
        <button className='scroll-img' onClick={redirect} style={{zIndex: 1}} />
        <img className='scroll-img' src={arrows} alt='scroll' />
      </Jump>
    )
}

export default ScrollButton
