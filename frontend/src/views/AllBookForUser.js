import React, { useEffect, useState } from 'react'
import "./Allbookforuser.css";
import { GetBookCall } from '../hooks/apicall';
import axios from 'axios';


function AllBookForUser() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);


    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    // }


    useEffect(() => {
        GetBookCall("reader").then((res) => {
            setData(res.data)

        }).catch((res) => {
            setData(null)
        })
    }, []);
    return (

        <div className="App">
            <h1 className='text'>All BOOKS</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div className='Appbook'>
                            <div >
                                
                                <p className='text5'>ISBN : {dataObj.isbn} </p>
                                <p className='text5'>Title: {dataObj.title}  </p>
                                <p className='text5'> Authors :{dataObj.authors}  </p>
                                <p className='text5'>Publisher :{dataObj.publisher} </p>
                                <p className='text5'>Version: {dataObj.version}</p>
                                <p className='text5'>Total Copies : {dataObj.total_copies}</p>
                                {/* <p><button type="submit"className="btn1">Delete Book</button></p> */}
                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default AllBookForUser