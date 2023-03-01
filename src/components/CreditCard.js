export default function CreditCard(props){
    let stringedYear = props.expirationYear.toString()

let style = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
}


    return (
        <div className="d-flex justify-content-center container text-white mt-5" >
        <div className="card p-2 px-3 py-3" style={style}>
            <div className="d-flex justify-content-between align-items-center"><img src="https://i.imgur.com/8ANWXql.png" width="20" height="20"/><span height="40">{props.type}</span></div>
            <div className="mt-3"><span className="mr-3">****</span><span className="mr-3">****</span><span className="mr-3">****</span><span className="mr-2">{props.number.substr(props.number.length - 4)}</span></div>
            <div className="d-flex justify-content-between card-details mt-3 mb-3">
                <div className="d-flex flex-column">
                    <span className="light">Card Holder</span><span>{props.owner}</span>
                    </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column mr-3"><span className="light">Expired</span><span>{props.expirationMonth}/{stringedYear.substr(stringedYear.length - 2)}</span></div>
                    <div className="d-flex flex-column"><span className="light">CVV</span><span>857</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}