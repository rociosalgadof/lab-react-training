import { useState } from "react"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import emptyDice from "../assets/images/dice-empty.png"

export default function Dice(){
    let arr = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomNum = Math.floor(Math.random() * (arr.length - 0)) + 0
    const [img, setImg] = useState(dice3)
    function handleClick(){
        setImg(emptyDice)
        setTimeout(()=>{
            setImg(arr[randomNum])
        }, 1000)
    }
    return (
    <div><img src={img} height="100" onClick={handleClick}/></div>
    )
}