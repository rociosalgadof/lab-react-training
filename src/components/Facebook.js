import profiles from '../data/berlin.json';
import { useState } from 'react';

export default function FaceBook(){
const [countrySelected, setCountrySelected] = useState(null)
let countries = ["All"]

profiles.forEach((item)=>{
    if(!countries.includes(item.country)){
        countries.push(item.country)
    }
})

function handleClick(country){
setCountrySelected(country)
}

return (
<>
<div className='row'>
    {countries.map((item)=>{
        return (<button onClick={()=>{handleClick(item)}} className="btn col">{item}</button>)
    })}
</div>
<div className="row justify-content-between mt-5">
    {profiles.map((item)=>{
        return (
<div className={`card mb-3 ${countrySelected === item.country ? "bg-primary" : null}`} style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">First Name: {item.firstName}</h5>
        <h5 className="card-title">Last Name: {item.lastName}</h5>
        <h5 className="card-title">Country: {item.country}</h5>
        <h5 className="card-title">Type: {item.isStudent ? "Student" : "Teacher"}</h5>
      </div>
    </div>
  </div>
</div>
        )
    })}
</div>
</>
    )
}