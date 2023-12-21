import { Helmet } from "react-helmet-async";
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from "../../components/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenuItems from "../../Hooks/useMenuItems";
import FoodCard from "../../components/OrderComponents/FoodCard/FoodCard";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [dessert, salad, pizza, soup, offered] = useMenuItems();
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover bgImg={orderImg}
                title="Order Food"
            />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-3">
                        {
                            salad.map(item => (
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;