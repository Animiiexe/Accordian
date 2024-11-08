function Card(props) {
    console.log(props);
    const heading = {
        color: "red"
    }
    return <div className="card">
        <img src={props.imglink} alt="" />
        <h1 style={heading}>{props.name} {59 + 10}</h1>
        <p>
            {props.description}
        </p>
        <button>{props.btn}</button>
    </div>


}

export default Card