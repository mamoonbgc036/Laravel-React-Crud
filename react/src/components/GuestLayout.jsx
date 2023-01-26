import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/contextProvider.jsx"

export default function GuestLayout(){
   const {token} = useStateContext()

   if(token){
      return <Navigate to='/dashboard' />
   }
    return(
       <div>
          <Outlet />
       </div>
    )
}