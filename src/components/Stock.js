import React from 'react'



const Stock = (props) => {
 
 return (
  <div>
    
    <div className="card" 
    onClick={(()=>props.moveStock(props.stock.id) )
      
    }>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${props.stock.ticker}: ${props.stock.price} `
          }</p>
      </div>
    </div>


  </div> )
}

export default Stock
