import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../../components/HomeComponents/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                bgImg={menuImage}
                title="Our menu"
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;