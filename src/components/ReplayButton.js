import { replay } from '../images'

const ReplayButton = () => {
    const reload = () => {
        window.location.reload()
        window.scrollTo({top: 0})
    }

    return (
        <button className='replay-btn' onClick={reload}>
            <img className='link-btn' src={replay} alt='replay' style={{
                width: 36,
                height: 36,
                marginBottom: '0px'
            }} />
        </button>
    )
}

export default ReplayButton
