import replay from '../images/replay.png'

const ReplayButton = () => {
    const reload = () => {
        window.location.reload()
        window.scrollTo({top: 0})
    }

    return (
        <button className='replay-btn' onClick={reload}>
            <img style={{width: 36, height: 36}} src={replay} alt='replay'/>
            <div className='img-overlay' />
        </button>
    )
}

export default ReplayButton
