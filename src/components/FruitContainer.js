import React, { Component } from 'react';
import List from './List';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            fruitsToDisplay: props.fruits,
            filterValue: ''
        };
    }

    render() {
        console.log('---- state -----');
        console.log(this.state.fruitsToDisplay);
        console.log('---- props -----');
        console.log(this.props.fruits);


        return (
            <div>
                <List yoFruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;