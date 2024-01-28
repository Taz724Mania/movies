

const Movies = (props) => {

    return ( 

        <div className="Movies">

            <h2>Title: {props.name}</h2>
            <h2>Release Year: {props.year}</h2>
            <h2>Rating: {props.rating}</h2>
            <img 
                src={props.image}
                alt={props.name}
                height={props.height}
                width={props.width}
            />

        </div>

    
    )  
}


export default Movies
