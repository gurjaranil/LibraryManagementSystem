import React from "react";
import "./Libcreate.css";
import { useState } from "react";
import { RegisterLibraryCall } from "../hooks/apicall";


function Libcreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [libname, setLibName] = useState("");
  



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = RegisterLibraryCall(name,email,contact,password,libname)
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div >
      <div className="libcreate">
        <h4>Create Library</h4>
        <form onSubmit={handleSubmit}>

          <div className="text_arealib">
            {/* <label htmlFor="gmail">Owner Name:</label> */}
            <input
              type="text"
              value={name}
              placeholder="Write The OwnerName"
              onChange={(e) => setName(e.target.value)}
              className="text_input2"
            />
          </div>

          <div className="text_arealib" >
            {/* <label htmlFor="gmail">Onwer Gmail:</label> */}
            <input
              type="gmail"
              value={email}
              placeholder="Write the Owner Gmail"
              onChange={(e) => setEmail(e.target.value)}
              className="text_input2"
            />
          </div>
          <div className="text_arealib" >
            {/* <label htmlFor="contactNumber">Contact Number:</label> */}
            <input
              type="number"
              value={contact}
              placeholder="Write Your Contact Number"
              onChange={(e) => setContactNumber(e.target.value)}
              pattern="[0-9]{10}"
              // defaultValue="Email@example.com"
              className="text_input2"
            />
          </div>
          <div className="text_arealib" >
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              value={password}
              placeholder="Create Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="text_input2"
            />
          </div>

          




         

          <div className="text_arealib">
            {/* <label htmlFor="gmail">Library Name:</label> */}
            <input
              type="text"
              value={libname}
              placeholder="Write library name here.."
              onChange={(e) => setLibName(e.target.value)}
              className="text_input2"
            />
          </div>

          <input
            type="submit"
            value="Cteate Library"
            className="btn"

          />
        </form>
      </div>
    </div>
  );
}
export default Libcreate;