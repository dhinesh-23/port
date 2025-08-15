import Addcartlist from "./addcardlist";
import Addcart from "./addcart";

export default function Cartsection(item){


    return(
       <>
       <div className="addcartsection">
       <h1 className="addcard-title"> cart product</h1> 
       <div className="cardsection">
         <Addcartlist/>
          </div>
          
       </div>
    </> 
    );
}