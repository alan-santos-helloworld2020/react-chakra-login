import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Private=({children})=>{

    const navigate = useNavigate();
    const [auth,setAuth] = useState(false);

    useEffect(()=>{

        setAuth(localStorage.getItem("auth"))
        console.log(auth)

    });

    if(!JSON.parse(auth)){
        navigate("/")
    }else{
       return children;
    }

}

export default Private;