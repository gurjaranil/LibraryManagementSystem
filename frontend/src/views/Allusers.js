import React, { useEffect, useState } from 'react'
import "./Alluser.css";
import { GetUserCall } from '../hooks/apicall';


function AllUsers() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);


    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    // }


    useEffect(() => {
        GetUserCall("admin").then((res) => {
            setData(res.data)

        }).catch((res) => {
            setData(null)
        })
    }, []);
    return (

        <div className="App">
            <h1 className='text'>All USER</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div className='App2'>
                            <div >
                                
                                <p className='text3'>UserId : {dataObj.ID}</p>
                                <p className='text3'>Name: {dataObj.name}</p>
                                <p className='text3'>Email :{dataObj.email}</p>
                                <p className='text3'>ContactNumber :{dataObj.contact_number}</p>
                                <p className='text3'> Role: {dataObj.role}</p>

                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default AllUsers