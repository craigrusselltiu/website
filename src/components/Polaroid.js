import noimage from '../images/no-image.png'

const Polaroid = ({ img, sig }) => {
    return (
        <div className='content'>
            <div className='polaroid-wrapper'>
                <div className='polaroid'>
                    <img className='polaroid-img' src={img} alt='img' />
                    <div className='polaroid-sig'>{sig}</div>
                </div>
            </div>
        </div>
    )
}

Polaroid.defaultProps = {
    img: noimage,
    sig: 'Signature',
}

export default Polaroid
