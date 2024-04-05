import React from "react";
import "./bookissuerequest.css";
import { AddBookCall, RequestBook } from "../hooks/apicall";
import { useState } from "react";

function BookIssueRequest() {
  const [book_id, setBookId] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = RequestBook(book_id)
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="project">
      <div className="login5">
        <h4>Book Request</h4>
        <form onSubmit={handleSubmit}>

          <div className="text_area1">
            {/* <label htmlFor="gmail">Owner Name:</label> */}
            <input
              type="number"
              value={book_id}
              placeholder="ISBN number"
              onChange={(e) => setBookId(e.target.value)}
              className="text_input2"
            />
          </div>

         


          <input
            type="submit"
            value="Send Reaquest"
            className="btn"

          />
        </form>
      </div>
    </div>
  );
}
export default BookIssueRequest;