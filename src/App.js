import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DogList from './components/DogList';

export const URL = 'https://ada-flasky.herokuapp.com/dogs';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newDogs = response.data.map((dog) => {
          return {
            id: dog.id,
            name: dog.name,
            breed: dog.breed,
            age: dog.age,
            chip: dog.chip,
          };
        });
        setStatus('Loaded');
        setDogs(newDogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //https://www.w3schools.com/js/js_random.asp
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const addChip = (id) => {
    const newDogs = dogs.map((dog) => {
      if (dog.id === id) {
        return {
          ...dog,
          chip: String(getRndInteger(1000, 9999)),
        };
      }
      return dog;
    });
    setDogs(newDogs);
  };

  const deleteDog = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList
            dogs={dogs}
            addChipCallback={addChip}
            deleteDogCallback={deleteDog}
          />
        </div>
      </main>
    </div>
  );
};

export default App;