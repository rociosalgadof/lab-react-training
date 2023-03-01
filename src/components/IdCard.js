export default function IdCard({firstName, lastName, gender, height, birth, picture}){
    return(
    <div className="card mb-3 bg-white" style={{maxWidth: '540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={picture} className="img-fluid rounded-start" alt="..."/></div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">First Name: {firstName}</h5>
                    <h5 className="card-title">Last Name: {lastName}</h5>
                    <h5 className="card-title">Gender: {gender}</h5>
                    <h5 className="card-title">Height: {height}</h5>
                    <h5 className="card-title">Birth: {birth}</h5>
                </div>
            </div>
        </div>
    </div>)
}