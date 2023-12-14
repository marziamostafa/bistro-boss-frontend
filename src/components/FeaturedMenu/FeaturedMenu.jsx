import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"


const FeaturedMenu = () => {
    return (
        <div>
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            />
            <div>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
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