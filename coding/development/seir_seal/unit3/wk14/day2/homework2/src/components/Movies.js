// the component function
const Movies = (props) => {

    //The Components Returned JSX
    return (
        movies.map(v => <Movie title={v.name} releaseYear={v.year} rating={v.rating}/>)
    )
}

// export the component
export default Movies
