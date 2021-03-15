import noimage from '../images/no-image.png'

const Background = ({ img }) => {
    return (
        <div className='background'>
          <img className='fade-img' src={img} alt='bg' style={{height: 'auto'}} />
        </div>
    )
}

Background.defaultProps = {
    img: noimage,
}

export default Background
