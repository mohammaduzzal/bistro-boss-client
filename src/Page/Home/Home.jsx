import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Bistro from "./Bistro";
import Card from "./Card";
import Category from "./Category";
import Contact from "./Contact";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Card></Card>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;