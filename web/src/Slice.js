import React, { Component } from 'react';

export class Slice extends Component {
    constructor(props) {
        super(props);
    }

    getImage() {
        let known = ['artichoke', 'pepperoni', 'mushroom', 'cheese', 'margherita', 'bacon', 'hawaiian', 'supreme'];
        let name = this.props.name.toLowerCase();
        if(known.indexOf(name) === -1) {
            name = 'pizza';
        }
        return `img/${name}.png`;
    }

    getRotation() {
        let degree = (this.props.index || 0) * 45;
        return {
            transform: 'rotate(' + degree + 'deg)'
        };
    }

    render() {
        return (
          <div id={this.props.name} className="pizza" style={this.getRotation()}>
              <img alt={this.props.name} src={this.getImage()} width="125px" />
          </div>
        )
    }
}
