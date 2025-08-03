import Cover from "./shared/cover";
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
        <div>
            <Cover img={menuImg} title="our menu"/>
            {/* main cover */}
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
    );
};

export default Menu;