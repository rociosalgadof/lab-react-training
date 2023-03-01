export default function Random(props){
let randomNum = Math.floor(Math.random() * (props.max - props.min)) + props.min;
return (
    <h1>Random number between {props.min} and {props.max} {"=>"} {randomNum}</h1>
)
}