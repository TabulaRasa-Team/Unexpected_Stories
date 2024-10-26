import React from 'react';
import '../style/BusStopBackground.css';
import MainTitle from './MainTitle';
import ChoiceBusStop from './ChoiceBusStop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BusStopBackground() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainTitle/>}/>
                    <Route path='/ChoiceBusStop' element={<ChoiceBusStop />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default BusStopBackground;