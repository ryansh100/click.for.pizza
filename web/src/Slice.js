import React, { Component } from 'react';

export class Slice extends Component {
    constructor(props) {
        super(props);
    }

    getImage() {
        return `img/${this.props.name.toLowerCase()}.png`;
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
