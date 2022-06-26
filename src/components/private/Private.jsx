import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Private=({children})=>{

    const navigate = useNavigate();
    const [auth,setAuth] = useState(false);

    useEffect(()=>{

        setAuth(localStorage.getItem("auth"))

    },[]);

    if(!auth){
        return navigate("/")
    }

    return children;

}

export default Private;