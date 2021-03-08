import axios from "axios";
import react,{useState,useEffect} from "react";
import ReactDom from "react-dom";
import './App.css';
import Demo from "./Demo.js" ;

function App() {

  //const  url=`https://api.unsplash.com/`;

 const[loading,setLoading]=useState(false);
 useEffect(()=>{
   setLoading(true)
   setTimeout(()=>{
     setLoading(false)
   },5000)
 },[])
  return(
      <div className="App">
      {
        loading ? <div>
        <img className='or' src='./photo.jpg' />
        <h2>unsplash</h2>
        </div>:<div>unsplash image List......
        <Demo/></div>
      }
        
        
       </div>
  )
};
export default App;