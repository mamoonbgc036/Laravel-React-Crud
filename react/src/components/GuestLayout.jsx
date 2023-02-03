import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function GuestLayout(){
    const {user,token} = useStateContext()

    if(token){
        return <Navigate to='/users' />
    }
    return(
       <div>
          <Outlet />
       </div>
    )
}