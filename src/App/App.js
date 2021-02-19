import './App.css'
import AppHeader from '../Header'
import Card from '../Card'
import { useEffect, useState } from 'react'
import Button from '../Button'
// import { results } from '../rickandmortyapi.json'

function App() {
  const [characters, setCharacters] = useState([])
  const [filteredSpecies, setFilteredSpecies] = useState('all')

  useEffect(() => {
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
      <section className="Button__wrapper">
        <Button
          onClick={() => setFilteredSpecies('Human')}
          disabled={filteredSpecies === 'Alien'}
          title={'Human'}
        />
        <Button
          onClick={() => setFilteredSpecies('Alien')}
          disabled={filteredSpecies === 'Alien'}
          title={'Alien'}
        />
        <Button
          onClick={() => setFilteredSpecies('all')}
          disabled={filteredSpecies === 'all'}
          title={'All'}
        />
      </section>
      {characters
        .filter(
          character =>
            filteredSpecies === 'all' || character.species === filteredSpecies
        )
        .map(
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
