
interface WorkDataProps {
    name: string;
    years: number;
}

function Card({name, years}: WorkDataProps) {

    return (
        <div className="card mx-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">I have {years} years of experience</p>
        <a href="#" className="card-link">Learn More</a>
      </div>
    </div>
    )
}

export default Card;