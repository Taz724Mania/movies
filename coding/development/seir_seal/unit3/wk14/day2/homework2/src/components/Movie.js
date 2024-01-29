// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return (
        <div className="movie">
            <h1>Title: {props.movie.name}</h1>
            <h1>Release Year: {props.movie.year}</h1>
            <h1>Rating: {props.movie.rating}</h1>
        </div>
    )
}

// export the component
export default Movie
