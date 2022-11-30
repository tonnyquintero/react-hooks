import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
   const [darkModo, setDarkModo] = useState(false);
   const [darkMode, setDarkMode] = useState(false);

   const { color, updateColor } = useContext(ThemeContext)


   const handleClick = () => {
    setDarkModo(!darkModo)
   }

   //Función para cambiar el modo oscuro
   const handleClickmode = () => {
    setDarkMode(!darkMode)
    color === "bg-light" ? updateColor ("bg-dark") : updateColor ("bg-light")
   }





  return (
    <div className='Header'>
      <button type='button' onClick={handleClickmode}>Cambiar el Color </button>
        <h1 style={{ color }}>React Hooks 🎣</h1>
        <button type='button' onClick={handleClick}>{darkModo ? 'Dark Mode' : 'Light Mode'}</button>

        {/* Insertando una funcion anonima dentro del onclick sin necesidad de crear una función */}
        <button type='button' onClick={() => setDarkModo(!darkModo)}>{darkModo ? 'Dark Mode2' : 'Light Mode2'}</button>
    </div>
  )
}

export default Header