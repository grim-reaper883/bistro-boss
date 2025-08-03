import { useState } from 'react';
import orderCoverImg from '../assets/shop/order.jpg'
import Cover from './shared/cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../components/FoodCard';
import useMenu from '../hooks/useMenu';
import OrderTab from '../components/OrderTab';

const Order = () => {
    const[tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert') 
    const salad = menu.filter(item=> item.category === 'salad') 
    const soup = menu.filter(item=> item.category === 'soup')  
    const pizza = menu.filter(item=> item.category === 'pizza')   
    const drinks = menu.filter(item=> item.category === 'drinks') 
    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food"/>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;