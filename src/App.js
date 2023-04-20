import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import { originals,action } from './urls';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Rowpost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} name='Netflix Orginals'/>
      <RowPost url={action} name='Action' isSmall />

    </div>
  );
}

export default App;
