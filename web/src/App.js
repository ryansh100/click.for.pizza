import React, { Component } from 'react';
import './App.css';
import {Slice} from './Slice';
import {ClickButton} from './ClickButton';
import {Delivery} from './Delivery';
import {model} from './model';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          slices: [],
          currentDegree: 0,
          delivering: false
      };

      this.pieRotator = setInterval(() => this.rotatePie.bind(this)(), 33);

      model.getSlices().then(data => {
          this.setState({
              slices: data
          });
      })

      model.onDeliverStarted((evt) => {
          this.setState({
              delivering: true
          });
      });

      model.onDeliverComplete((evt) => {
          this.setState({
              delivering: false,
              lastSlice: evt.detail
          });
      });
  }

  rotatePie()  {
      var deg = this.state.currentDegree;

      deg += 3;

      if (deg == 360) {
          deg = 0;
      }

      this.setState({
          currentDegree: deg
      });
  }

  renderSlices() {
      let $html = [];
      for (let slice of this.state.slices) {
          let i = this.state.slices.indexOf(slice);
          $html.push(
            <Slice key={i} index={i} name={slice.name}></Slice>
          )
      }
      return $html;
  }

  getPieRotationStyle() {
      return {
          transform: 'rotate(' + this.state.currentDegree + 'deg)'
      };
  }

  getFillClass() {
      return this.state.delivering ? 'filling' : '';
  }

  lastDelivery() {
      if(!this.state.lastSlice) {
          return;
      }

      return (<Delivery slice={this.state.lastSlice}></Delivery>);
  }

  render() {
    return (
      <div className="app">
            <div id="pizza-pie" className="pie" style={this.getPieRotationStyle()}>
                {this.renderSlices()}
            </div>
            <div id="location">
                <form name="location">
                <input type="text" name="name" style={{width: '300px'}} placeholder="Name" /><br/>
                <input type="text" name="street" style={{width: '300px'}} placeholder="Street" /><br/>
                <input type="text" name="city" style={{width: '159px'}} placeholder="City" />
                <input type="text" name="state" style={{width: '50px'}} maxLength="2" placeholder="ST" />
                <input type="number" name="zip" style={{width: '75px'}} placeholder="ZIP" />
                </form>
            </div>
            <ClickButton currentDegree={this.state.currentDegree} slices={this.state.slices}></ClickButton><br/>
            <div id="pizza-plate">
                <div id="pizza-filling-bar" className={this.getFillClass()}>
                </div>
                <div id="pizza-delivery">
                    {this.lastDelivery()}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
