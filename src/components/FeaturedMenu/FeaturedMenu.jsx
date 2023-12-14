import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import "../../Styles/FeaturedMenu.css"


const FeaturedMenu = () => {
    return (
        <div className="featured-item text-white pt-6 my-20">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
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