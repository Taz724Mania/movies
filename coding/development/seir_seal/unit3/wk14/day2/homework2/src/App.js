
import films from './movies'
import Movies from './components/Movies'


const App = (props) => {

  return (
    
      films.map(v => <Movies name={v.name} year={v.year} rating={v.rating} img={v.image}/>)
    
  );
}

export default App;

