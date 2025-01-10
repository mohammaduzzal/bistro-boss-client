import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const Signup = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
    } = useForm();
    const {createUser,  updateUserProfile} = useContext(AuthContext)

    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(res =>{
            const loggedUser = res.user;
            // console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                // console.log('user profile info updated');
                // create user entry in db
                const userInfo = {
                    name : data.name,
                    email : data.email
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully!!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                })

            })
            .catch(err => console.log(err))
        })
    };
    //  console.log(watch("example"))  



    return (<>
    <Helmet>
        <title>Bistro Boss || Signup</title>
    </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" required />
                            {errors.photo && <span>PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true, minLength: 6, maxLength: 20,
                                pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/

                            })} placeholder="password" className="input input-bordered" required />
                            {/* pass validate */}
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be six character long</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password must be less than or equal twenty character </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600"> password must be  including number, Upper, Lower And
                                    one special character </p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="text-center my-2"><small>Already have an account ? <Link className="text-red-700" to='/login'>Login</Link></small></p>
                    
                </div>
            </div>
        </div>
        </>);
};

export default Signup;