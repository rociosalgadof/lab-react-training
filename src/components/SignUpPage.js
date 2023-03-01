import { useState } from "react"

export default function SignupPage(){
    const [greeting, setGreeting] = useState(null)
    const [email, setEmail] = useState(null)

    function handleChange(event){
        setEmail(event.target.value)
    }

    function handleSelect(event){
        console.log("hola!!")
        setGreeting(event.target.value)
    }

    return (
        <>
        <div className="row">
        <div className="col-6">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} value={email}/>
        </div>  
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>  
        <div class="mb-3">
        <label for="nacionality" class="form-label">Nacionality</label>
        <select class="form-select" aria-label="Default select example" id="nacionality" onChange={handleSelect}>
        <option selected>Open this select menu</option>
        <option value="Hello">en</option> 
        <option value="Hallo">de</option>
        <option value="Bonjour">fr</option>
        </select>
        </div> 
        <button className="btn btn-primary">Sign Up</button> 
        {greeting && <h1>{greeting}</h1>}
        {email && <h1>Your e-mail is: {email}</h1>}
        </div>
        </div>   
        </>
    )
}
