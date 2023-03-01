export default function NumbersTable({limit}){
let arr = []
for(let i = 1; i<=limit; i++){
    if(i % 2==0){
        arr.push(<div style={{height: "200px"}} className="col-4 bg-white">{i}</div>)
     }
     else {
        arr.push(<div style={{height: "200px"}} className="col-4 bg-danger">{i}</div>)
     }
}
return(
    <div className="row mt-5">
    <div className="col-6">
    <div className="row">
       {arr}
    </div>
    </div>
    </div>
)
}