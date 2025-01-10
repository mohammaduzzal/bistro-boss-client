import { useLoaderData } from "react-router-dom";
import SharedTitle from "../../Components/SharedTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const UpdateItem = () => {
    const {name,category,recipe,price,_id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    // console.log(item);
    console.log(name,category,recipe,price);

    const onSubmit = async (data) => {
        // console.log(data)
        // img upload to imagebb and then get an api
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now sent the menu item data to the server with the img url
            const menuItems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems)
            // console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // toast
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        // console.log(res.data);

    }



    return (
        <div>
            <SharedTitle
                subHeading='Refresh Item'
                heading='Update Item'
            ></SharedTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                        defaultValue={name}
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />

                    </label>
                    <div className="flex">
                        {/* category */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select defaultValue={category}  {...register("category")} className="select w-full max-w-xs">
                                <option disabled value="default">Category Selection</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Desserts</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </label>

                        {/* price */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                            defaultValue={price}
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full" />

                        </label>

                    </div>
                    {/* details */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>

                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn"><FaUtensils></FaUtensils> Update Menu Item </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;