import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertMenu from '../../assets/menu/dessert-bg.jpeg';
import pizzaMenu from '../../assets/menu/pizza-bg.jpg';
import saladMenu from '../../assets/menu/salad-bg.jpg';
import soupMenu from '../../assets/menu/soup-bg.jpg';
import useMenu from "../../hooks/useMenu";
import SharedTitle from "../../Components/SharedTitle";
import MenuCategory from "./MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Menu
                </title>
            </Helmet>
            
          <Cover img={menuImg} title={'Our Menu'}></Cover>
          {/* main category */}
          <SharedTitle
              subHeading={"Don't Miss"}
              heading={"Today's Offer"}
            ></SharedTitle>
            {/* offered category */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert cate */}
            <MenuCategory items={desserts} title={'dessert'} img={dessertMenu}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaMenu}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladMenu}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupMenu}></MenuCategory>
        </div>
    );
};

export default Menu;