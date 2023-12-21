import { Helmet } from "react-helmet-async";
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from "../../components/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenuItems from "../../Hooks/useMenuItems";
import OrderItemTab from "../../components/OrderComponents/OrderItemTab/OrderItemTab";
import { useParams } from "react-router-dom";




const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [dessert, salad, pizza, soup, drinks] = useMenuItems();
    const { category } = useParams();
    console.log(category)
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
                    <OrderItemTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderItemTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderItemTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderItemTab items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderItemTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;