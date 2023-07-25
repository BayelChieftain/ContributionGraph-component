import React from "react";
import Activity from "./Activities";
import './Gstyle.css'
const Graph = (props) => {
    
   
    return (
        <>
        <div className="container">
        <div className="calendar">
        <Activity/>
       </div>
      
       </div>
       <div className="activity">
       <div className="Ablock A1"></div>
       <div  className="Ablock A2"></div>
       <div  className="Ablock A3"></div>
       <div  className="Ablock A4"></div>
       <div  className="Ablock A5"></div>
      </div>
      </>
   )
}




export default Graph;
