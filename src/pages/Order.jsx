import { useState } from 'react';
import orderCoverImg from '../assets/shop/order.jpg';
import Cover from './shared/Cover';
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
        <div className="min-h-screen">
            <Cover img={orderCoverImg} title="Order Food" />
            <div className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                            <Tab className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer">Salad</Tab>
                            <Tab className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer">Pizza</Tab>
                            <Tab className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer">Desert</Tab>
                            <Tab className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer">Soup</Tab>
                            <Tab className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer">Drinks</Tab>
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
            </div>
        </div>
    );
};

export default Order;