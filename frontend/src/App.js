import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Liblist from "./views/Liblist";
import Requestaccess from "./views/Requestaccess";
import Libcreate from "./views/Libcreate";
import Login from "./views/Login";
import Header from "./components/Header";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminDashboard } from "./views/AdminDashboard";
import { OwnerDashboard } from "./views/OwnerDashboard";
import { ReaderDashboard } from "./views/ReaderDashboard";
import { useAuth } from "./hooks/AuthProvider";
import AddBook from "./views/AddBook";
import AllUser from "./views/Alluser";
import AllUsers from "./views/Allusers";
import AllBook from "./views/AllBook";
import AllBookForUser from "./views/AllBookForUser";
import BookIssueRequest from "./views/BookIssueRequest";
import SeeRequest from "./views/SeeRequest";
import IssuedBookList from "./views/IssuedBookList";
import Logout from "./views/logout";


function App() {
  const {Role}=useAuth()
  return (
    <>

    <Router>
      <Routes>

          <Route exact path="/" element={<div> <Header /> <Home /> </div> }/>
          <Route exact path="/liblist" element={ <div> <Header /> <Liblist /> </div> }/>
          <Route exact path="/libcreate" element={ <div> <Header /> <Libcreate /> </div>} />
          <Route exact path="/requestaccess" element={ <div> <Header /><Requestaccess /> </div>}/>
          <Route exact path="/login" element={ <div> <Header /> <Login />  </div>}/>
          <Route  path="/dashboard" element={Role==='admin'?<AdminDashboard/>:Role==="owner"?<OwnerDashboard/>:<ReaderDashboard/>} >
          <Route  path="addbook" element={  <AddBook /> } />
          <Route  path="alluser" element={  <AllUser /> } />
          <Route  path="users" element={  <AllUsers /> } />
          <Route  path="seeallbook" element={  <AllBook /> } />
          <Route  path="allbook" element={  <AllBookForUser /> } />
          <Route  path="bookissue" element={  <BookIssueRequest /> } />
          <Route  path="seerequest" element={  <SeeRequest /> } />
          <Route  path="issedbook" element={  <IssuedBookList/> } />
          
          


          </Route>
      </Routes>

            
    </Router>
    </>
  );
}

export default App;
