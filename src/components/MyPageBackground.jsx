import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyPage from './MyPage';
import '../style/MyPageBackground.css'

const MyPageBackground = () => {
    return (
        <div className='MyPageBackImg'>
            <Routes>
                <Route path='./MyPage' element={<MyPage />} />
            </Routes>
        </div>
    )
};

export default MyPageBackground;