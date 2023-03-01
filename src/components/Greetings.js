export default function Greetings(props){
let hi = ""
if(props.lang==="de"){
    hi = "Hallo"
}else if(props.lang==="fr"){
    hi = "Bonjour"
}else if(props.lang==="es"){
    hi = "Hola"
}else {
    hi = "Hello"
}

return (
    <>
    <h1>{hi} {props.children}</h1>
    </>
)
}