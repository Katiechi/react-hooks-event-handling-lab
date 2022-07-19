// Code Keypad Component Here
import React from "react"

function Keypad(){
    function listenChange(){
        console.log("Entering password...")
    }
   return <input onChange={listenChange} type="password" />
}

export default Keypad