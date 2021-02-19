import './App.css'
import AppHeader from '../AppHeader'
import Card from '../Card'
import React from 'react'
// import { results } from '../rickandmortyapi.json'

function App() {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    getAllCharacters() // no url provided, so the default parameter is used
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // url has a default value that is used in the useEffect() above
  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // data is this object: {info: ..., results: ...}

        // https://reactjs.org/docs/hooks-reference.html#functional-updates
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next // contains the next url, if it exists
        nextUrl && getAllCharacters(nextUrl) // if nextUrl exists, fetch it
      })
  }

  return (
    <div className="App">
      <AppHeader title="Rick & Morty" />
      {characters.map(
        ({ name, species, image, status, gender, origin, location, id }) => (
          <Card
            key={id}
            name={name}
            species={species}
            image={image}
            status={status}
            gender={gender}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}

export default App
