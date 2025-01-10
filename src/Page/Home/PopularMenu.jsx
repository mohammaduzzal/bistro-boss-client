import SharedTitle from "../../Components/SharedTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    
    return (
        <section className="my-10">
            <SharedTitle
              subHeading={'Check It Out'}
              heading={'From Our Menu'}
            ></SharedTitle>
            <div className="grid md:grid-cols-2 gap-10 my-5">
                {
                   popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;