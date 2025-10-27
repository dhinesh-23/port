import { Link } from "react-router-dom";


export default function Gnav (){

   function actionbar(){
        menu.hidden^=1
   }


    return(<>
         <nav className="graph-nav">
            <img src="./graphlogo.png" alt="logo" className="graphlogo" />
            <button onClick={actionbar} id="bar"><i class="fa fa-bars"></i></button>
         </nav>
        <div id="menu" hidden>
                  <Link to="/project4" className="link-tag"><li>Home</li></Link>
                 <Link to="/graphchart" className="link-tag"><li>graph chart</li></Link>
                 <Link to="/barchart" className="link-tag"><li>Bar chart</li></Link>
                  <Link to="/piechart" className="link-tag"><li>pie chart</li></Link>
                 <li><button onClick={actionbar} id="close"><i class="fa fa-close"></i></button></li>
       </div>
    
    
    </>);
}