import React, { useEffect, useState } from 'react'
import "./liblist.css";


function Liblist() {
  const url = "http://localhost:9999/library";
  const [data, setData] = useState([]);
  

  const  fetchInfo= () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    
    <div className="App">
      <h1  className='text'>Available Libraries</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div className='App3'>
                    <div >
                           <p className='text2'><div></div>Library Name: {dataObj.name} </p>
                           <p className='text2'><div></div>Library Id : {dataObj.ID} </p>
                   </div>
            </div>
            
          );
        })}
      </center>
    </div>
  )
}
export default Liblist