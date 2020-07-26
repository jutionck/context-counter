import React, {Component} from 'react';
import Card from "../components/Card";
import {Counter} from "../context/Counter";


class CardContainer extends Component {
    constructor(props) {
        super(props)

        this.increment = () => {
            this.setState({
                number: this.state.number + 1,
            })
        }
        this.decrement = () => {
            this.setState({
                number: this.state.number - 1,
            })
        }
            this.state = {
                number: 0,
                increment: this.increment,
                decrement:this.decrement
            }
    }

    render() {
        return (
            <div>

                <Counter.Provider value={
                    this.state
                }>
                    <Card/>
                </Counter.Provider>
            </div>
        );
    }
}

export default CardContainer;