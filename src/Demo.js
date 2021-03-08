import React,{useEffect,useState} from 'react'
import axios from "axios";
import swDev from './swDev'
import './Demo.css'


function Demo() {
    const[images, setImages]=useState([]);
    const[mode,setMode]=useState('online');
    useEffect(() => {
     axios.get("https://api.unsplash.com/photos/random?client_id=UY-9dTK_ZVhPe47l2HRvM4PccM3PmrnPvtRchTpN2Ms&count=10")
      .then(Response=>{
        console.log(Response.data);
        setImages(Response.data)
        localStorage.setItem("users",JSON.stringify(Response.data))
      }).catch(err=>{
        setMode('offline')
        let collection=localStorage.getItem('users');
        setImages(JSON.parse(collection))
      }
  
      )
  
    },[]);
    return (
     <div>
      

       {
         images.map((name,index) =>( <img className='show' src={name.urls.thumb} alt={index} key={name.id}/>))
       }
     </div>
    )
}
export default Demo;
