import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(res =>{
            // console.log(res.user);
            const userInfo ={
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }


    return (
        <div>
            <div className="justify-center flex">
                <button onClick={handleGoogleSign} className="btn w-2/3  btn-outline">
                   <FaGoogle/>
                    Signin with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;