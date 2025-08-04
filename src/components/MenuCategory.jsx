import Cover from "../pages/shared/Cover";
import MenuItem from "../pages/shared/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="mb-16">
            {title && <Cover img={img} title={title}/>}
            <div className='grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12'>
                {
                    items.map(item=> <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;