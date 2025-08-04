import Banner from '../components/Banner';
import Category from '../components/Category';
import Featured from '../components/Featured';
import PopularMenu from '../components/PopularMenu';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;