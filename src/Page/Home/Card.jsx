import SharedTitle from "../../Components/SharedTitle";
import one from '../../assets/home/slide1.jpg'
import two from '../../assets/home/slide2.jpg'
import three from '../../assets/home/slide3.jpg'

const Card = () => {
    return (
        <div>
             <SharedTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SharedTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={one}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={two}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={three}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Card;