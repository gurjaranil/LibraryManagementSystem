import React from "react";
import "./Addbook.css";
import { AddBookCall } from "../hooks/apicall";
import { useState } from "react";

function AddBook() {
  const [isbn, setISBN] = useState("");
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [publisher, setPublisher] = useState("");
  const [version, setVersion] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = AddBookCall(isbn,title,authors,publisher,version,total,"admin")
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
 

  return (
    <div className="project">
      <div className="login1">
        <h4>Add Book</h4>
        <form onSubmit={handleSubmit}>

          <div className="text_area1">
            {/* <label htmlFor="gmail">Owner Name:</label> */}
            <input
              type="number"
              value={isbn}
              placeholder="ISBN number"
              onChange={(e) => setISBN(e.target.value)}
              className="text_input2"
            />
          </div>

          <div className="text_area1" >
            {/* <label htmlFor="gmail">Onwer Gmail:</label> */}
            <input
              type="text"
              value={title}
              placeholder="Book Title"
              onChange={(e) => setTitle(e.target.value)}
              className="text_input2"
            />
          </div>

          <div className="text_area1" >
            {/* <label htmlFor="contactNumber">Contact Number:</label> */}
            <input
              type="text"
              value={authors}
              placeholder="Write Author Name"
              onChange={(e) => setAuthors(e.target.value)}
          
              // defaultValue="Email@example.com"
              className="text_input2"
            />
          </div>




          <div className="text_area1" >
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="text"
              value={publisher}
              placeholder="Write the Publisher Name"
              onChange={(e) => setPublisher(e.target.value)}
              className="text_input2"
            />
          </div>

          <div className="text_area1">
            {/* <label htmlFor="gmail">Library Name:</label> */}
            <input
              type="text"
              value={version}
              placeholder="Which Version"
              onChange={(e) => setVersion(e.target.value)}
              className="text_input2"
            />
          </div>
          <div className="text_area1">
            {/* <label htmlFor="gmail">Library Name:</label> */}
            <input
              type="number"
              value={total}
              placeholder="Total Copies Of Book"
              onChange={(e) => setTotal(e.target.value)}
              className="text_input2"
            />
          </div>

          <button  onClick={handleSubmit} className="btn">Add Book</button>
        </form>
      </div>
    </div>
  );
}
export default AddBook;