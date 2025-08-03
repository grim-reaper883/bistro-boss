import Cover from "../pages/shared/cover";
import MenuItem from "../pages/shared/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title="our menu"/>}
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    items.map(item=> <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;