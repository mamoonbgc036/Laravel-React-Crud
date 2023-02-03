import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function DefaultLayout(){
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    if(!token){
        return <Navigate to='/login' />
    }
    return(
       <div>
          <Outlet/>
       </div>
    )
}