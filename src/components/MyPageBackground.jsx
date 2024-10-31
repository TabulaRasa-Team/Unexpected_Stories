import React from 'react';
import '../style/MyPageBackground.css'
import { Outlet } from 'react-router-dom'

const MyPageBackground = () => {
    return (
        <div className='MyPageBackImg'>
            <Outlet />
        </div>
    )
};

export default MyPageBackground;