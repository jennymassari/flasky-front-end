// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useState } from 'react';
import './App.css';
import CatList from './components/CatList';

const DATA = [
  {
    id : 1, 
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
    petCount: 0,
  },
  {
    id : 2,
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
    petCount: 0,
  },
  {
    id : 3,
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
    petCount: 0,
  },
  ];

function App() {
  // catData here is a variable
  const [catData, setCatData] = useState(DATA);
  // count the total of counted cats
  // const [totalPetCount, setTotalPetCount] = useState(0);

  const handlePetCat = (id) => {
    console.log(`we pet ${id} cat`);
    // update the cat
    // value of the state when the function gets called is not the same catData than in line 36.
    // catData is parameter that is being used to create a list with map
    setCatData(catData => catData.map(cat => {
      // for the cats that was not clicked point directly to the map
      if (cat.id === id) {
        // update pet count
        // ...cat make a copy
        //petCount: update pet count
        return {...cat, petCount: cat.petCount + 1};
      } else {
        // no change pet count
        return cat;
      }
    }));
  };

  const calculateTotalPetCount = (catData) => {
    let total = 0;
    for ( const cat of catData) {
      total += cat.petCount;
    }
    return total;
  };



  const totalPets = calculateTotalPetCount(catData);

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <h2> Total Number of Pets Across all cats: {totalPets}</h2>
        <CatList catData={catData} onPetCat={handlePetCat}/>
      
      </main>
    </>
  );
}

export default App;

