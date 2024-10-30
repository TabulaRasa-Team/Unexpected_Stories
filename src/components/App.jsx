import '../style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusStopBackground from './BusStopBackground';
import WriteStory from './WriteStory'
import MainTitle from './MainTitle';
import ChoiceBusStop from './ChoiceBusStop';

import MenuPage from './MenuPage';

function App() {
  return (
    <>
      <BusStopBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/WriteStory" element={<WriteStory />} />
          <Route path='/' element={<MainTitle />} />
          <Route path='/ChoiceBusStop' element={<ChoiceBusStop />} />
          <Route path='/MenuPage' element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
