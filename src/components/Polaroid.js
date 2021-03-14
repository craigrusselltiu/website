const Polaroid = ({ img, sig }) => {
    return (
        <div className='polaroid-paper'>
            <div className='polaroid'>
                <img className='polaroid-img' src={img} alt='bg' />
            </div>
            <div className='polaroid-sig'>{sig}</div>
        </div>
    )
}

export default Polaroid
