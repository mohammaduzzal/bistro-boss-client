import SharedTitle from "../../Components/SharedTitle";
import featuredItem from '../../assets/home/featured.jpg';
import './featured.css';

    
const Featured = () => {
    return (
        <div className="my-10 pt-8 bg-fixed featured-item text-white">
              <SharedTitle
            subHeading={'Check It Out'}
            heading={'Featured Item'}
            ></SharedTitle>
            {/* parallax */}
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36"> 
                <div>
                    <img src={featuredItem} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug, 2029</p>
                    <p className="uppercase">Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure eum incidunt quia, sunt amet eos nihil reprehenderit at pariatur ducimus, magnam iste harum. Cumque ipsum, totam voluptates nobis dignissimos nihil quos accusantium atque veritatis tempore impedit maxime facere qui culpa quo eveniet aut perspiciatis debitis fuga eligendi deserunt natus.</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;