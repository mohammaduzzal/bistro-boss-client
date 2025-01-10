import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()
    // get admin value from the db
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>

                            <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Item</NavLink></li>

                            <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Item</NavLink></li>

                            <li><NavLink to='/dashboard/booking'><FaBook></FaBook> Manage Booking</NavLink></li>

                            <li><NavLink to='/dashboard/users'><FaUser></FaUser> All User</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>

                            <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>

                            <li><NavLink to='/dashboard/paymentHistory'><FaCalendar></FaCalendar> Payment History</NavLink></li>

                            <li><NavLink to='/dashboard/review'><FaAd></FaAd> Add a Review</NavLink></li>

                            <li><NavLink to='/dashboard/booking'><FaList></FaList> My Booking</NavLink></li>
                        </>
                    }
                    {/* share nav link */}
                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/order/salad'><FaHome></FaHome>Menu</NavLink></li>
                    <li><NavLink to='/order/contact'><FaVoicemail></FaVoicemail> Contact</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;