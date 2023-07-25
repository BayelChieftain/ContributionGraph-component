import React from "react";
import './Gstyle.css'
const Activity = (props) => {
    const squares = [];

    for (let i = 0; i < 350; i++) {
      // Создаем объект для представления квадратика
      const square = {
        id: i + 1, // Уникальный идентификатор квадратика
      };
    
      squares.push(square); // Добавляем квадратик в массив
    }
    let cub = squares.map( el => <div className="square" >1</div>)
   
    return (
        <>
        {
            cub
        }
   </>
   )
}




export default Activity; 