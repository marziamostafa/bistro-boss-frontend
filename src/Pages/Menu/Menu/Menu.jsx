import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import MenuCategory from '../../../components/MenuComponents/MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover bgImg={menuImage}
                title="Our menu"
            />

            {/* offered menu items */}
            <SectionTitle heading="Today's offer"
                subHeading="Don't Miss" />
            <MenuCategory items={offered} />


            {/* dessert items */}
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImage} />

        </div>
    );
};

export default Menu;