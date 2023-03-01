export default function Rating(props){
    let totalStars = ""
    if(props.children > 0){
        for(let i =0; i <Math.round(props.children); i ++){
            totalStars+="★"
        }
        for(let i=Math.round(props.children); i <5; i++){
            totalStars+="☆"
        }
    }else{
        totalStars = "☆☆☆☆☆" 
    }
    let style = {color: props.bgColor ? props.bgColor : "black"}
    return (
        <div style={style}>{totalStars}</div>
    )
}