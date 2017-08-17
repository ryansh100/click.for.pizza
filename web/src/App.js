import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
            <div id="pizza-pie" className="pie">
                <div id="Artichoke" className="pizza">
                    <img src="img/pizza.png" width="125px" />
                </div>
                <div id="Bacon" className="pizza">
                    <img src="img/pizza.png" width="125px" />
                </div>
                <div id="Supreme" className="pizza">
                    <img src="img/pizza.png" width="125px" />
                </div>
                <div id="Cheese" className="pizza">
                    <img src="img/cheese.png" width="125px" />
                </div>
                <div id="Hawaiian" className="pizza">
                    <img src="img/hawaiian.png" width="125px" />
                </div>
                <div id="Margherita" className="pizza">
                    <img src="img/pizza.png" width="125px" />
                </div>
                <div id="Mushroom" className="pizza">
                    <img src="img/mushroom.png" width="125px" />
                </div>
                <div id="Pepperoni" className="pizza">
                    <img src="img/pepperoni.png" width="125px" />
                </div>
            </div>
            <div id="location">
                <form name="location">
                <input type="text" name="name" style="width:300px" placeholder="Name" /><br/>
                <input type="text" name="street" style="width:300px" placeholder="Street" /><br/>
                <input type="text" name="city" style="width:159px" placeholder="City" />
                <input type="text" name="state" style="width:50px" maxlength="2" placeholder="ST" />
                <input type="number" name="zip" style="width:75px" placeholder="ZIP" />
                </form>
            </div>
            <button class="btn-primary" id="action-button">Click For Pizza</button><br/>
            <div id="pizza-plate">
                <div id="pizza-filling-bar">
                </div>
                <div id="pizza-delivery">
                </div>
            </div>
        </div>
    );
  }
}

export default App;
