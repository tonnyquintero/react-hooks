import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Character from './components/Character';
import ThemeContext from './context/ThemeContext';

function App() {


  const [color, updateColor] = useState('bg-light') 

  
  return (
    <ThemeContext.Provider value={{ color, updateColor }}>
      <div className={ 'App ' + color }>
      <Header />
      <Character />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
