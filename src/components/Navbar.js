import TextButton from './TextButton'

const Navbar = () => {
    return (
        <div className='navbar'>
            <TextButton text='home' />
            <p className='txt-btn'>|</p>
            <TextButton text='projects' />
            <p className='txt-btn'>|</p>
            <TextButton text='contact' />
        </div>
    )
}

export default Navbar
