import { useForm } from "react-hook-form";
import SharedTitle from "../../Components/SharedTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key= import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api= `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) => {
        // console.log(data)
        // img upload to imagebb and then get an api
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers:{
                'content-type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            // now sent the menu item data to the server with the img url
            const menuItems ={
                name : data.name,
                category : data.category,
                price : parseFloat(data.price),
                recipe : data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItems)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // toast
                reset()
                Swal.fire({
                    position:"top-end",
                    icon:"success",
                    title:`${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer:1500
                });
                 
            }
        }
        console.log(res.data);

    }

    return (
        <div>
            <SharedTitle
                subHeading="what's new?"
                heading="Add an Item"
            ></SharedTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input 
                        {...register("name", {required: true})}
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
                        <select defaultValue="default"  {...register("category")} className="select w-full max-w-xs">
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
                        {...register("price",{required: true})}
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
                        <textarea {...register("recipe",{required: true})} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                        
                    </label>
                    <div className="form-control w-full my-6">
                    <input {...register("image",{required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn"><FaUtensils></FaUtensils> Add Item </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;