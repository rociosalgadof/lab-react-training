export default function BoxColor(props){
    let style = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    function valueToHex(c) {
        var hex = c.toString(16);
        return hex
    }

    function rgbToHex(r, g, b) {
        return(valueToHex(r) + valueToHex(g) + valueToHex(b));
    }

    return (
        <div style={style}>
            <h1>rgb({props.r}, {props.g}, {props.b})</h1>
            <h1>#{rgbToHex(props.r, props.g, props.b)}</h1>
        </div>
    )
}