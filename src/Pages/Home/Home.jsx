import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <FeaturedMenu />
            <Testimonials />
        </div>
    );
};

export default Home;