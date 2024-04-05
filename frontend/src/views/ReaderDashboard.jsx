import { Outlet } from "react-router-dom";
import Readerheader from "../components/Readerheader";

export function ReaderDashboard(){
    return(
<div>
    <Readerheader/>
    <Outlet/>
</div>
    )
}