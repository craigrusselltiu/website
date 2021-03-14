import TextPhotoPair from '../components/TextPhotoPair'
import TextCenter from '../components/TextCenter'

const Home = () => {
    return (
        <div>
            <TextPhotoPair />
            <TextPhotoPair type='left' />
            <TextPhotoPair />
            <TextCenter />
        </div>
    )
}

export default Home
