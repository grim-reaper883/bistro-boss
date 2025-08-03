import SectionTitle from './SectionTitle';
import MenuItem from '../pages/shared/MenuItem';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data=> {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // }, [])
    return (
        <section className='mb-12'>
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}/>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;