import React from "react";
import "./Requestaccess.css";
import { useState } from "react";
import Select from 'react-select';
import { useForm, useController } from 'react-hook-form';

function Libcreate() {
  const [username, setUsername] = useState("");
  const [gmail, setGmail]=useState("");
  const [password, setPassword]=useState("");
  const [role, setRole]=useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [libid,setLibId]=useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/userrequest", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          gmail: gmail,
          password: password,
          role: role,
          contactnumber: Number(contactnumber),
          libid: Number(libid),
        }),
      });
      console.log(res)
      let resJson = await res.json();
      if (res.status === 200) {
        setUsername("");
        setGmail("");
        setPassword("");
        setContactNumber("");
        setRole("")
        setLibId("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const languageList = [
    { value: 1, label: 'admin' },
    { value: 2, label: 'reader' }
  ];
  const selectLibId = [
    { value: 1, label: 1001 },
    { value: 2, label: 1002 },
    { value: 2, label: 1003 },
    { value: 2, label: 1004 },
    { value: 2, label: 1005 }
  ];
  const { control } = useForm({
  });
 
  const { field: { value: langValue, onChange: langOnChange, ...restLangField } } = useController({ name: 'language', control });

  return (
    <div className="project">
      <div className="login1">
      <h4>Request Access</h4>
      <form onSubmit={handleSubmit}>
      <div   className="text_area">
      {/* <label htmlFor="gmail">User Name:</label> */}
      <input
        type="text"
        value={username}
        placeholder="Please Write Your UserName"
        onChange={(e) => setUsername(e.target.value)}
        className="text_input1"
      />
      </div>
      <div   className="text_area">
      {/* <label htmlFor="gmail">Your Gmail:</label> */}
      <input
       type="text"
       value={gmail}
       placeholder="Write Your Gmail "
       onChange={(e) => setGmail(e.target.value)}
        className="text_input1"
      />
      </div>
     
     <div className="text_area" >
     {/* <label htmlFor="gmail">Password:</label> */}
     <input
        type="password"
        value={password}
        placeholder="Write Your Password"
        onChange={(e) => setPassword(e.target.value)}
        className="text_input1"
      />
     </div>

     <div className="text_area"  >
     {/* <label htmlFor="contactNumber">Contact Number:</label> */}
     <Select
        className='text_input1'
        placeholder="Select your role"
        isClearable
        options={languageList}
        value={langValue ? languageList.find(x => x.value === langValue) : langValue}
        onChange={option => langOnChange(option ? option.value : option)}
        {...restLangField}
      />
     </div>

     
     <div className="text_area" >
     {/* <label htmlFor="libId">Contact NUmber:</label> */}
     <input
        type="tel"
        value={contactnumber}
        placeholder="Write your Phone Number"
        onChange={(e) => setContactNumber(e.target.value)}
        // defaultValue="Email@example.com"
        className="text_input1"
      />
     </div>

     <div className="text_area" >
     {/* <label htmlFor="password">Library ID:</label> */}
     <input
        type="number"
        value={libid}
        placeholder="Select Your  Library Id"
        onChange={(e) => setLibId(e.target.value)}
        className="text_input1"
      />
     </div>

      <input
          type="submit"
          value="Access Request"
          className="btn"

        />
    </form>
      </div>
    </div>
  );
}
export default Libcreate;