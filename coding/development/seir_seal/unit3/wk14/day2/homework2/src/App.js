
import Movies from './components/Movies'

const App = () => {

  const movies = [
    {name: 'Resident Evil',
    year: '2002',
    rating: 'R',},

    {name: 'Practical Magic',
    year: '1998',
    rating: 'PG-13',},

    {name: 'Spirited Away',
    year: '2003',
    rating: 'PG',},

    {name: `Devil's Advocate` ,
    year: '1997',
    rating: 'R',},

    {name: 'Dungeons and Dragons',
    year: '2000',
    rating: 'PG-13',},

  ]


  return (
    <div className="App">

      <Movies movies={movies}/>

    </div>
  );
}

export default App;