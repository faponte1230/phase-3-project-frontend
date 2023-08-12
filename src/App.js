import { React ,useState, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './Header';

import './App.css';



function App() {
  //functions
  const [gyms, setGyms] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/gyms')
    .then(res => res.json())
    .then(gymData => setGyms(gymData))
  }, [])

  function addGym(newGym){
    setGyms([...gyms, newGym])
    console.log(newGym)
  }

  function updateGym(newGymdata){
    const updatedGyms = gyms.map((gym) => gym.id === newGymdata.id ? newGymdata : gym)
    setGyms(updatedGyms)
  }  
  return (
    <div className="App">
      <Header />
      <br></br>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
