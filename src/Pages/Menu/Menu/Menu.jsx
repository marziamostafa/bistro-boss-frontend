import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import MenuCategory from '../../../components/MenuComponents/MenuCategory/MenuCategory';
import useMenuItems from '../../../Hooks/useMenuItems';



const Menu = () => {
    const [dessert, salad, pizza, soup, offered] = useMenuItems();
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
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImage} />

            {/* pizza items */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImage} />

            {/* salad items */}
            <MenuCategory items={salad} title="salad" coverImg={saladImage} />

            {/* soup items */}
            <MenuCategory items={soup} title="soup" coverImg={soupImage} />
        </div>
    );
};

export default Menu;