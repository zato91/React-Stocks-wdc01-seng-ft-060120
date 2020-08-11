import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

renderStock(){
    let myStock =
     this.props.stocks.filter(stock => this.props.myPortfolio.includes(stock.id))
    return myStock.map(stock=> 
      <Stock 
      stock={stock}
       key={stock.id}
       moveStock={this.props.removeStockFromPortfolio}
       />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          
           {this.renderStock()}
          
      </div>
    );
  }

}

export default PortfolioContainer;
