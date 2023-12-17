
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/HomeComponents/Banner/Banner';
import Category from '../../components/HomeComponents/Category/Category';
import PopularMenu from '../../components/HomeComponents/PopularMenu/PopularMenu';
import FeaturedMenu from '../../components/HomeComponents/FeaturedMenu/FeaturedMenu';
import Testimonials from '../../components/HomeComponents/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <FeaturedMenu />
            <Testimonials />
        </div>
    );
};

export default Home;