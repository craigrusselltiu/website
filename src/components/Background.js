import misty from '../images/misty.png'

const Background = ({ img }) => {
    return (
        <div className='background'>
          <img className='fade-img' src={img} alt='bg' style={{height: 'auto'}} />
        </div>
    )
}

Background.defaultProps = {
    img: misty,
}

export default Background
