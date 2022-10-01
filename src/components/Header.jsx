import React, { useState } from 'react';


const Header = () => {
   const [darkMode, setDarkMode] = useState(false);

   const handleClick = () => {
    setDarkMode(!darkMode)
   }


  return (
    <div className='Header'>
        <h1>React Hooks</h1>
        <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>

        {/* Insertando una funcion anonima dentro del onclick sin necesidad de crear una función */}
        <button type='button' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode2' : 'Light Mode2'}</button>
    </div>
  )
}

export default Header