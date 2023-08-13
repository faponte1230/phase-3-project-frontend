import { React ,useState, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './Header';
import GymList from './GymList';
import './App.css';
import GymForm from './GymForm';
import UpdateGymForm from './UpdateGymForm';
import GymReviews from './GymReviews';


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

  function deleteGym(id){
    const deletedGyms = gyms.filter(gym => gym.id !== id)
    setGyms(deletedGyms)
    console.log('deleted')
  }
  
  function addNewReview(newReview){
    const currentGym = gyms.find((gym) => gym.id === newReview.gym_id)
    currentGym.reviews.push(newReview)
    const updatedgyms = gyms.map((gym) => gym.id === currentGym.id ? currentGym : gym)
    setGyms(updatedgyms)
  }

  function deleteReview(deletedRev){
    const currentGym = gyms.find((gym) => gym.id === deletedRev.gym_id)
    const updatedReviews = currentGym.reviews.filter((review) => review.id !== deletedRev.id)
    currentGym.reviews = updatedReviews
    const updatedGyms = gyms.map((gym) => gym.id === currentGym.id ? currentGym : gym)
    setGyms(updatedGyms)
  }

  return (
    <div className="App">
      <Header />
      <br></br>
      <Routes>
        <Route path='/' element={
          <>
            <GymForm addGym={addGym} />
            <UpdateGymForm updateGym={updateGym} />
            <GymList gyms={gyms} updateGym={updateGym} deleteGym={deleteGym}/>
          </>}>
        </Route>

        <Route path='/reviews/:gym_id' element={<GymReviews gyms={gyms} addNewReview={addNewReview} deleteReview={deleteReview}/>} />
      </Routes>
    </div>
  );
}

export default App;
