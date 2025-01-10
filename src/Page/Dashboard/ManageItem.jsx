import { FaTrashAlt, FaUser } from "react-icons/fa";
import SharedTitle from "../../Components/SharedTitle";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu,,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data);
                if(res.data.deletedCount > 0){
                    // refetch
                    refetch()
                    Swal.fire({
                        position:"top-end",
                        title: `${item.name} has been deleted`,
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            }
          });
          

    }


    return (
        <div>
            <SharedTitle
                heading='Manage All Items'
            ></SharedTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, idx) => (
                                    <tr key={item._id}>
                                        <td>
                                            {idx + 1}
                                        </td>
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
                                        <td className="text-right">{item.price}</td>
                                        <td>
                                            <Link to={`/dashboard/updateItem/${item._id}`}
                                                className="btn bg-orange-300"><FaUser className="text-white"></FaUser></Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(item)}
                                                className="btn btn-ghost btn-lg "><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;