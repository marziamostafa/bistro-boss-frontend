import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import MenuCategory from '../../../components/MenuComponents/MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    //const desert = menu.filter(item => item.category === "desert")
    //const soup = menu.filter(item => item.category === "soup")
    //const salad = menu.filter(item => item.category === "salad")
    // const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                bgImg={menuImage}
                title="Our menu"
            />
            <SectionTitle
                heading="Today's offer"
                subHeading="Don't Miss"
            />
            <MenuCategory
                items={offered}
            />

        </div>
    );
};

export default Menu;