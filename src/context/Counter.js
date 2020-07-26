import React from "react";
const myNumber = {
    number: 0
}


const Counter = React.createContext({
    number : myNumber.number,
});

export {Counter, myNumber}
