import TextButton from './TextButton'

const Navbar = () => {
    return (
        <div className='navbar'>
            <TextButton text='homepage' />
            <TextButton text='projects' />
            <TextButton text='contact' />
        </div>
    )
}

export default Navbar
