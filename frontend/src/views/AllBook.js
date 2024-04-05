import React, { useEffect, useState } from 'react'
import "./allbook.css";
import { Deletebook, GetBookCall } from '../hooks/apicall';
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
function AllBook() {
    // const url = "http://localhost:9999/owner/user";
    const [data, setData] = useState([]);
   
 
    useEffect(() => {
        GetBookCall("admin").then((res) => {
            setData(res.data)
           

        }).catch((res) => {
            setData(null)
        })
    }, []);


    const deleteHandler =(id) =>{
        apiClient
           .delete(`/admin/book/${id}`)
           .then(res => {
            console.log('deleted',res)
            setData(res.data)
           })
           .catch(error =>{
            console.log(error)
           })
        }
        
        
    

    
    return (

        <div className="App">
            <h1 className='text'>All BOOKS</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div className='Appbook'>
                            <div >
                                
                                <p className='text4'>ISBN : {dataObj.isbn} </p>
                                <p className='text4'>Title: {dataObj.title}  </p>
                                <p className='text4'> Authors :{dataObj.authors}  </p>
                                <p className='text4'>Publisher :{dataObj.publisher} </p>
                                <p className='text4'>Version: {dataObj.version}</p>
                                <p className='text4'>Total Copies : {dataObj.total_copies}</p>
                                <p><button type="submit"className="btn1" onClick={() => deleteHandler(data.at(-1).isbn)}>Delete Book</button></p>
                            </div>
                        </div>

                    );
                })}
            </center>
        </div>
    )
}
export default AllBook