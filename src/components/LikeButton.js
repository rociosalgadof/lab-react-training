import { useState } from "react"

export default function LikeButton(){
    const [likes, setLikes] = useState(0)
    let colors = ['purple','blue','green','yellow','orange','red']
    let randomNum = Math.floor(Math.random() * (colors.length - 0)) + 0
    let style = {
        backgroundColor: colors[randomNum]
    }
    function clickHandler(){
        setLikes(likes+1)
    }
    return (
        <button onClick={clickHandler} style={style}><span>{likes} </span> Likes</button>
    )
}