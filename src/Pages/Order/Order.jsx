import { Helmet } from "react-helmet-async";
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from "../../components/Shared/Cover/Cover";

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover bgImg={orderImg}
                title="Order Food"
            />
            <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className="tab">Tab 1</a>
                <a role="tab" className="tab tab-active">Tab 2</a>
                <a role="tab" className="tab">Tab 3</a>
            </div>
        </div>
    );
};

export default Order;