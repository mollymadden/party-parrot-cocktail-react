import React, { Component } from 'react';
import cocktail from './assets/cocktail.png';
import beer from './assets/beer.jpeg';
import water from './assets/water.jpg';
import background from './assets/685.jpg';
import heading from './assets/heading.png'
import './App.css';


export default class App extends Component {
  state = {
  cocktailCount: 0,
  beerCount: 0,
  waterCount: 0,
  cocktailPrice: 22,
  beerPrice: 12,
  waterPrice: 6,

}

incrementCocktail = () => {
  let cocktailCount = this.state.cocktailCount;
  cocktailCount = cocktailCount + 1;
  this.setState ({cocktailCount})
}

incrementBeer = () => {
  let beerCount = this.state.beerCount;
  beerCount = beerCount + 1;
  this.setState ({beerCount})
}

incrementWater = () => {
  let waterCount = this.state.waterCount;
  waterCount = waterCount + 1;
  this.setState ({waterCount})
}

clearEverything = () => {
  let cocktailCount = 0;
  let beerCount = 0;
  let waterCount = 0;
  this.setState ({cocktailCount})
  this.setState ({beerCount})
  this.setState ({waterCount})
}

render() {
  let cocktailCount = this.state.cocktailCount;
  let cocktailPrice = this.state.cocktailPrice;

  let beerCount = this.state.beerCount;
  let beerPrice = this.state.beerPrice;
  
  let waterCount = this.state.waterCount;
  let waterPrice = this.state.waterPrice.toFixed(2);

  let cocktailTotal = cocktailPrice * cocktailCount;
  let beerTotal = beerPrice * beerCount;
  let waterTotal = waterPrice * waterCount;

  let cocktailCost= 8;
  let beerCost = 3;
  let waterCost = 0.15

  let cocktailProfit = cocktailCount * cocktailCost;
  let beerProfit = beerCount * beerCost;
  let waterProfit = waterCount * waterCost;

  let cocktailGrandTotal = cocktailTotal - cocktailProfit;
  let beerGrandTotal = beerTotal - beerProfit;
  let waterGrandTotal = waterTotal - waterProfit

return (
<div className="page">

    <div className="sidebar">
        <img src={heading} className="heading" alt="heading" />

        <div className="drinks">

          <div className="picbutton">
            <img src={cocktail} className="cocktail" alt="cocktail" />
            <button onClick={this.incrementCocktail}>Add 1 for $22</button>
          </div>

          <div className="picbutton">
            <img src={beer} className="beer" alt="beer" />
            <button onClick={this.incrementBeer}>Add 1 for $12</button>
          </div>
   
          <div className="picbutton">
            <img src={water} className="water" alt="water" />
            <button onClick={this.incrementWater}>Add 1 for $6</button>
          </div>
        </div>


        <h2>Current Order</h2>
        <div className="currentOrder">
          <div className="cocktailCount">
          🍹 ‎‏‏‎ ‎‎{cocktailCount} x‎‏‏‎‏‏‎ ‎‏‏‎ ${cocktailTotal} Party Parrot Cocktail‎‎<br /> 
          🍺 ‎‏‏‎ ‎‎{beerCount} x‏‏‎ ‎‏‏‎ ${beerTotal} Party Parrot Beer‎‎<br />
          💧 ‎‏‏‎ ‎‎{waterCount} x‏‏‎ ‎‏‏‎ ${waterTotal} Party Parrot Water‎<br />
          </div>

        </div>


        <h2>Cost Price</h2>
          <div className="costPrice">
          🍹 ‎‏‏‎ ‎‎{cocktailCount} @ ${cocktailProfit} ea <br />
          🍺 ‎‏‏‎ ‎‎{beerCount} @ ${beerProfit} ea <br />
          💧 ‎‏‏‎ ‎‎{waterCount} @ ${waterProfit} ea <br />
          </div>

        <h2>Profit Total</h2>
          <div className="profitTotal">
          🍹 ‎‏‏‎ ‎‎${cocktailGrandTotal}<br />
          🍺 ‎‏‏‎ ‎‎${beerGrandTotal}<br />
          💧 ‎‏‏‎ ‎‎${waterGrandTotal}<br />
            ------<br />
            ${cocktailGrandTotal + beerGrandTotal + waterGrandTotal} Profit earned on this order<br />
          <button onClick={this.clearEverything}>Clear Order</button>
        </div>


    </div>

    <div className="main">
      <img src={background} className="background" alt="background" />
    </div>

    </div>
  )}
    }