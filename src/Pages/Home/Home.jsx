import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

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