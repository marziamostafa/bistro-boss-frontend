import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import "../../Styles/FeaturedMenu.css"


const FeaturedMenu = () => {
    return (
        <div className="featured-item">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            />
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Dec 14, 2023</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia nam. Esse molestiae beatae itaque, aut laboriosam, consequuntur voluptate consectetur quo facere assumenda omnis atque nobis, in ducimus vel maxime!</p>.
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedMenu;