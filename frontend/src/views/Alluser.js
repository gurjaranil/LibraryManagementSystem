import React, { useEffect, useState } from 'react'
import "./Alluser.css";
import { GetUserCall } from '../hooks/apicall';


function AllUser() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);


    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    // }


    useEffect(() => {
        GetUserCall("owner").then((res) => {
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
                        <div className=''>
                            <div >
                                <p className='text3'> UserId : {dataObj.ID} <br/>Name: {dataObj.name} <br/>  Email :{dataObj.email} <br/> ContactNumber :{dataObj.contact_number}
                                <br/> Role: {dataObj.role}</p>
                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default AllUser