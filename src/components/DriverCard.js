import Rating from "./Rating"

export default function DriverCard(props){

return (
    <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
    <Rating bgColor="white">{props.rating}</Rating>
  </div>
</div>
)
}