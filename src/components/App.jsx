import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusStopBackground from './BusStopBackground';
import WriteStory from './WriteStory'
import MainTitle from './MainTitle';
import ChoiceBusStop from './ChoiceBusStop';
import MenuPage from './MenuPage';
import MyPageBackground from './MyPageBackground';
import MyPage from './MyPage';
import ReadStoryBackground from './ReadStoryBackground';
import ReadStory from './ReadStory';

function App() {
  const server = process.env.REACT_APP_PYTHON
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [bus_stops, setBus_stops] = useState([])

  const findBusStop = async () => {
    try {
      const response = await axios.post(`${server}/nearest_bus_stops/`, {
        latitude,
        longitude
      })

      setBus_stops(response.data.bus_stops)
    } catch(error) {
      console.error("Error : ", error)
    }
  }
  
  return (
    <>
      <BusStopBackground />
      <BrowserRouter>
        <Routes>
          <Route path='/WriteStory' element={<WriteStory />} />
          <Route path='/' element={<MainTitle setLatitude={setLatitude} setLongitude={setLongitude}/>} />
          <Route path='/ChoiceBusStop' element={<ChoiceBusStop bus_stops={bus_stops} findBusStop={findBusStop} setLatitude={setLatitude} setLongitude={setLongitude}/>} />
          <Route path='/MenuPage' element={<MenuPage />} />
          <Route path='/MyPageBackground' element={<MyPageBackground />}>
            <Route path='MyPage' element={<MyPage />} />
          </Route>
          <Route path='/ReadStoryBackground' element={<ReadStoryBackground />}>
            <Route path='ReadStory' element={<ReadStory />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
