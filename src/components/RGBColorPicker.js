import { useState } from "react"

export default function RGBColorPicker(props){
    console.log(props.children)
    const [rgb, setRgb] = useState({r: 0, g:0, b:0})
    return(
        <div style={{height: "50px", width:"50px", backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}} className="mt-5 mb-5"></div>
    )
}