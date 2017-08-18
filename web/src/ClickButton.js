import React, { Component } from 'react';
import {model} from './model';

export class ClickButton extends Component {
    constructor(props) {
        super(props);

        this.deliver = (evt) => {
            let slice = null;
            if (this.propsCurrentDegree === 0) {
                slice = this.props.slices[0];
            }
            else{
                let i = Math.floor(this.props.currentDegree / 45);

                slice = this.props.slices[i];
            }
            
            model.deliver(slice);
        }
    }

    render()  {
        return (
            <button onClick={this.deliver} className="btn-primary" id="action-button">
              Click For Pizza
            </button>
        )
    }
}
