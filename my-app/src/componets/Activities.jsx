import React from "react";
import './Gstyle.css'
import axios, * as others from 'axios';
import { format, compareAsc } from 'date-fns'

const Activity = (props) => {
    const squares = [];

    


   const data =  axios.get('https://dpg.gg/test/calendar.json')
    .then(response => {
        squares.push(response.data)
       
    })
   
    console.log(squares)
      
    
    let cub = squares.map( el => <div className="square">122</div>)
    console.log(squares)
   
    return (
        <>
        {
            squares[3]
        }
   </>
   )
}




export default Activity; 