
import { useState } from "react";
import Addcart from "./addcart";

export default function Addcartlist(){
    

   const [item,setitem]=useState([
       {
       id:1,
       img:'./into.png', 
       name:'T-shirt',
       desc:'Stay cool in this ultra-soft, breathable tee made for everyday comfort and effortless style.',
       rating:4,
       price:50,
     },
       {
       id:2,
       img:'./t1.png',
       name:'shirt',
       desc:'Bold, relaxed, and built to stand out — this oversized tee brings street style to life.',
       rating:5,
       price:40,
     },
      {
       id:3,
       img:'./t2.png',
       name:'shirt',
       desc:'Clean design meets daily wear. Subtle graphics with maximum vibe.',
       rating:3,
       price:50,
     },
      {
       id:4,
       img:'./t3.png',
       name:'shirt',
       desc:'Chic and comfy — this crop tee is perfect for layering or flaunting your vibe solo.',
       rating:3.5,
       price:50
     },
      {
       id:5,
       img:'./t4.png',
       name:'shirt',
       desc:'Sweat-friendly, stretch-ready — this tee moves with you from warm-up to cool-down.',
       rating:4,
       price:30
     },
      {
       id:6,
       img:'./t5.png',
       name:'shirt',
       desc:'Bright colors, soft feel — made for endless play and full-day comfort.',
       rating:4.6,
       price:20
     },
     {
       id:7,
       img:'./t6.png',
       name:'shirt',
       desc:'Bright colors, soft feel — made for endless play and full-day comfort.',
       rating:4.6,
       price:20
     },
     {
       id:8,
       img:'./t7.png',
       name:'shirt',
       desc:'Bright colors, soft feel — made for endless play and full-day comfort.',
       rating:4.6,
       price:20
     },
     {
       id:9,
       img:'./t8.png',
       name:'shirt',
       desc:'Bright colors, soft feel — made for endless play and full-day comfort.',
       rating:4.6,
       price:20
     },
     {
       id:10,
       img:'./t9.png',
       name:'shirt',
       desc:'Bright colors, soft feel — made for endless play and full-day comfort.',
       rating:4.6,
       price:20
     }
     
    ]);
    
   
    function handledelete(id){
        const newcart=item.filter((item)=>item.id != id)
        setitem(newcart);
     }

   const Addcartlist = item.map((item)=>
     <Addcart key={item.id} name={item.name} desc={item.desc} id={item.id} img={item.img} price={item.price} rating={item.rating} delete={handledelete} />
);

    return(<>
    
    {Addcartlist}
    
    
    
    </>);
}