import React, { useEffect, useState } from 'react'
import "./allbook.css";
import { Deletebook, GetBookCall } from '../hooks/apicall';
import axios from 'axios';


function IssuedBookList() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);
   
 
    useEffect(() => {
        GetBookCall("admin").then((res) => {
            setData(res.data)
           

        }).catch((res) => {
            setData(null)
        })
    }, []);


    
        
    return (

        <div className="App">
            <h1 className='text'>Issued Bood List</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div className='Appbook'>
                            <div >
                                
                                <p className='text4'>ISBN : {dataObj.isbn} </p>
                                <p className='text4'>Book Id: {dataObj.book_id}  </p>
                                <p className='text4'> reader_id :{dataObj.reader_id}  </p>
                                <p className='text4'>status :{dataObj.status} </p>
                                <p className='text4'>issue_date: {dataObj.issue_date}</p>
                                <p className='text4'>issue_approver_id : {dataObj.issue_approver_id}</p>
                                {/* <p><button type="submit"className="btn1" onClick={() => deleteHandler(data.at(-1).isbn)}>Delete Book</button></p> */}
                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default IssuedBookList