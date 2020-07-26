import React from 'react';
import {Counter} from "../context/Counter";

const ButtonCounter = () => {
    return (
        <div>
            <Counter.Consumer>
                {({number, increment,decrement}) => {

                    return (
                        <>
                            <div style={{height: 100}}>
                                <h1>{number}</h1>
                                <button className="btn btn-outline-danger"
                                    onClick={decrement}>Decrement
                                </button>
                                <button className="btn btn-outline-primary"
                                    onClick={increment}>Increment
                                </button>
                            </div>
                        </>
                    )
                }}
            </Counter.Consumer>
        </div>
    );
};

export default ButtonCounter;