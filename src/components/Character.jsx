import React, {useState, useEffect, useReducer, useMemo, useRef} from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
        default:
            return state;
    }
}

const Character = () => {
    const [character, setCharacter] = useState([])
    const [search, setSearch] = useState('')
    //sirve para encapsular o abstraer en una funcion el resultado de la busqueda
    const searchInput = useRef(null)

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacter(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    //Funcion para recojer los datos que el user esté escribiendo
    const handleSearch =  () => {
        //el set searchInput viene del use ref.que trae current y value incorporados
        setSearch (searchInput.current.value)
    }
//Funcion para filtrar en el array
    // const filteredUser = character.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    //Función con Memoization(Guardando el calculo)
    const filteredUser = useMemo(() => 
    character.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [character, search]
    )


  return (
    <>
        <div >
        {favorites.favorites.length > 0 &&
        <>
            <h1>Lista de Favoritos</h1>
            <div className='item-container'>
                {favorites.favorites.map(favorite => (
            <div className='container'>
                <img src={favorite.image} alt={favorite.name} />
                <h2>{favorite.name}</h2>
                <h3>{favorite.gender}</h3>
                <h3>{favorite.species}</h3>
            </div>
        ))}
            </div>

        </>

        }
    </div>

       <div className='Search'>
            <input onChange={handleSearch} ref={searchInput} type='text' value={search}/>
        </div>

    <div className='item-container'>
        {filteredUser.map(character => (
            <div className='item' key={character.id}>
                <div className="container">
                <img src={character.image} alt={character.name}></img>
                <h2>{character.name}</h2>
                <h3>{character.gender}</h3>
                <h3>{character.species}</h3>
            </div>
            <button type='button' onClick={() => handleClick(character)}>Agregar a Favoritos</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Character