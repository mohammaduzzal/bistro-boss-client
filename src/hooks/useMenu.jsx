import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () =>{
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() =>{
    //     fetch('https://bistro-boss-server-roan-theta.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setLoading(false)
    //         setMenu(data)
    //     })
    // },[])

    const {data : menu =[],isPending:loading,refetch} = useQuery({
        queryKey: ['menu'],
        queryFn:async()=>{
            const {data} = await axiosPublic.get('/menu')
            return data
        }
    })


    
    return [menu,loading,refetch];

}
export default useMenu;