import { useState } from "react"

export default function SingleColorPicker(props){
    return(
        <>
        <label for="customRange3" class="form-label">R</label>
        <input type="range" class="form-range" min="0" max="255" step="0.5" id="customRange3"></input>
        <label for="customRange3" class="form-label">G</label>
        <input type="range" class="form-range" min="0" max="255" step="0.5" id="customRange3"></input>
        <label for="customRange3" class="form-label">B</label>
        <input type="range" class="form-range" min="0" max="255" step="0.5" id="customRange3"></input>
        </>
    )
}