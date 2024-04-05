// import { Outlet } from "react-router-dom";
import { Outlet, Route } from "react-router-dom";
import Adminheader from "../components/Adminheader";
import AddBook from "./AddBook";
// import AddBook from "./AddBook";


export function AdminDashboard(){
    return(
<div>
    <Adminheader/>
    <Outlet/>
</div>
    )
}