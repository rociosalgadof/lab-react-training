import { useState } from "react"

export default function ClickablePicture(props){
const [img, setImg] = useState(props.img)
function handleClick(){
    setImg(img===props.img?props.imgClicked : props.img)
}
return (
    <div><img src={img} onClick={handleClick}/></div>
)
}