import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Cards from './components/Cards';
import Pagination from './components/Pagination';

function App() {
  const [cards, setCards] = useState([]);
  const getData = () => {
    fetch('properties.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setCards(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Menu />
      <Cards cards={cards}/>
      <Pagination />
    </div>
  );
}

export default App;
