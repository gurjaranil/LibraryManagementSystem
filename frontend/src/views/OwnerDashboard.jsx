import { Outlet } from "react-router-dom";
import Ownerheader from "../components/Ownerheader";

export function OwnerDashboard(){
    return( 
          <div>
                <Ownerheader/>
                <Outlet/>
          </div>  
    )
}