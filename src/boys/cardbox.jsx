import { useState } from "react";


export default function Cardbox(item){

 const [purchased,setpurchased]= useState(false)
 
 function buy(){
     
    setpurchased(true);


  }
    return(
   <>
    <div className="card">
       <img src={item.img} alt="product-img"/>
       <h1>{item.name}</h1>
       <h2>{item.desc}</h2>
       <h2>${item.price}</h2>
       <button className="card-btn"onClick={buy} >buy now</button>
       <p>{purchased ? "Already purchased.." :"get it now.."}</p>

    </div>

   
   
   
   </>


    );


}