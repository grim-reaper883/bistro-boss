import Cover from "./shared/Cover";
import menuImg from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert') 
    const salad = menu.filter(item=> item.category === 'salad') 
    const soup = menu.filter(item=> item.category === 'soup')  
    const pizza = menu.filter(item=> item.category === 'pizza')  
    const offered = menu.filter(item=> item.category === 'offered')  
    return (
        <div className="min-h-screen">
            <Cover img={menuImg} title="our menu"/>
            {/* main cover */}
            <div className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>
                    {/* offered menu items */}
                    <MenuCategory items={offered}/>
                    {/* dessert menu items */}
                    <MenuCategory 
                    items={dessert}
                    title="Dessert"
                    img={dessertImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;