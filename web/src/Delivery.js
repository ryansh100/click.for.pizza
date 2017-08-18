import React, { Component } from 'react';

export class Delivery extends Component {
    getImage() {
        return `img/${this.props.slice.name.toLowerCase()}.png`;
    }

    render() {
        return (
          <div className="click">
            <div className='thumbnail'>
                <img src={this.getImage()} style={{ width: '2em' }} alt={this.props.slice.name} />
            </div>
            <div className='type'>You received {this.props.slice.name} pizza!</div>
          </div>
        )
    }
}
