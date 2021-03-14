import TextPhotoPair from '../components/TextPhotoPair'
import TextCenter from '../components/TextCenter'
import pic1 from '../images/pic1.png'

const Home = () => {
    return (
        <div>
            <TextPhotoPair img={pic1} sig={'Osaka, 2018'} />
            <TextPhotoPair type='left' />
            <TextPhotoPair />
            <TextCenter />
        </div>
    )
}

export default Home
