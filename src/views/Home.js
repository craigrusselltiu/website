import TextCenter from '../components/TextCenter'
import TextPhotoPair from '../components/TextPhotoPair'

import pic1 from '../images/pic1.png'

const Home = () => {
    return (
        <div>
            <TextPhotoPair header='MORE THAN JUST A CODE MONKEY' img={pic1} sig={'Osaka, 2018'} />
            <TextPhotoPair type='left' />
            <TextCenter />
            <TextPhotoPair />
            <TextCenter />
        </div>
    )
}

export default Home
