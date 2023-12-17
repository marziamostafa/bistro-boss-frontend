import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'



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

        </div>
    );
};

export default Menu;