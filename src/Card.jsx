function Card() {

    const heading ={
        color :"red"
    }
    return <div className="card">
        <img src="https://placehold.co/100" alt="" />
        <h1 style={heading}>Wazzup Guys {59 + 10}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas nihil qui.
        </p>
        <button>Click Me</button>
    </div>


}

export default Card