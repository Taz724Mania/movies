import Movie from './Movie'

const Movies = (props) => {

   return (

    <div className='movies'>

        {props.movies.map((movies) => {

            return <Movie key={movies.name} movies={movies} />

        })}

    </div>

   )

}

// export the component
export default Movies
