import './App.css'
import Card from '../Card'
import { results } from '../rickandmortyapi.json'

function App() {
  return (
    <div className="App">
      {results.map(
        ({ name, species, image, id, gender, status, origin, location }) => (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}

export default App
