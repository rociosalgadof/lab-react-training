import { useState } from "react"

export default function Carousel(props){
    const [num, setNum] = useState(0)

    function handleBefore(){
        if(num>0){
            setNum(num-1)
        }
    }

    function handleAfter(){
        let len = props.images.length-1
        if(num<len){
            setNum(num+1)
        }
    }

    return (
        <div><span onClick={handleBefore}>{"<--"}</span><img src={props.images[num]}/><span onClick={handleAfter}>{"-->"}</span></div>
    )
}