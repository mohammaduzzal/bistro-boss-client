import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        // update ui/ux
                        refetch()
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            
            }
          });
    }


    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">items : {cart.length}</h2>
                <h2 className="text-4xl">items : {totalPrice}</h2>
                {cart.length ?
                    <Link to='/dashboard/payment' className="btn btn-primary">Pay</Link> : <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                             #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, idx) => <tr key={item._id}>
                                <th> 
                                  {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                      
                                    </div>
                                </td>
                                <td>
                                {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button 
                                    onClick={() => handleDelete(item._id)}
                                     className="btn btn-ghost btn-lg "><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;