import Jump from 'react-reveal/Jump'
import arrows from '../images/scroll.png'

const ScrollButton = () => {
    const redirect = () => {
      window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
    }

    return (
      <div>
        <Jump forever duration={2000}>
          <img className='scroll-img' src={arrows} alt='scroll' />
        </Jump>
        <button className='scroll-img' onClick={redirect} style={{height: '60px', zIndex: 0}} />
      </div>
    )
}

export default ScrollButton
