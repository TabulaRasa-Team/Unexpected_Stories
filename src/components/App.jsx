import '../style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusStopBackground from './BusStopBackground';
import WriteStory from './WriteStory'

function App() {
  return (
    <>
      <BusStopBackground/>
      <BrowserRouter>
        <Routes>
            <Route path="/WriteStory" element={<WriteStory />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
