import React, {useState, useEffect} from 'react'

const Character = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacter(data.results))
    }, [])

  return (
    <div>
        {character.map(character => (
            <div className="container">
                <img src={character.image} alt={character.name}></img>
                <h2>{character.name}</h2>
                <h3>{character.gender}</h3>
                <h3>{character.species}</h3>
            </div>
        ))}
    </div>
  )
}

export default Character