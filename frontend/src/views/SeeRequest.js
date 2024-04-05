import React, { useEffect, useState } from 'react'
import "./allbook.css";
import {  GetRequestCall } from '../hooks/apicall';
import axios from 'axios';


const apiClient=axios.create(
    {
        baseURL:'http://localhost:9999/'
    }
  )

  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('Token'); // Assuming you store the token in localStorage
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


function SeeRequest() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);


    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    // }


    useEffect(() => {
        GetRequestCall("admin").then((res) => {
            setData(res.data)

        }).catch((res) => {
            setData(null)
        })
    }, []);


    const ApprovHandler =(id) =>{
        apiClient
           .put(`admin/request/approve/${id}`)
           .then(res => {
            console.log('Approved',res)
            setData(res.data)
           })
           .catch(error =>{
            console.log(error)
           })
        }


    return (

        <div className="App">
            <h1 className='text'>All Request</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div className='Appbook'>
                            <div >
                                
                                <p className='text4'>Request ID : {dataObj.ID} </p>
                                <p className='text4'>Book Id: {dataObj.book_id}  </p>
                                <p className='text4'> reader_id :{dataObj.reader_id}  </p>
                                <p className='text4'>status :{dataObj.status} </p>
                                <p><button type="submit"className="btn1" onClick={() => ApprovHandler(data.at(-1).ID)}>Accept Request</button></p>
                                <p><button type="submit"className="btn1">Reject Request</button></p>
                                
                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default SeeRequest