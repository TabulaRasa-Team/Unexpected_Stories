import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/MenuPage.css'
import paperPlane from '../images/paperPlane.svg'
import { Link } from 'react-router-dom';

const MenuPage = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className='BackgroundContainer'>
            <h1 className='MainTitle'>어쩌다 발견한 이야기</h1>
            <div className='paperPlaneDiv'>
                <img src={paperPlane} className='paperPlane' />
            </div>
            <div className='contents'>
                <Link to="../ChoiceBusStop" style={{ textDecoration: "none" }}>
                <div className='busStop busStop2'>
                    <span className="bustStopName">{data.bus_stop}</span>
                    <span className='distance'>{data.distance}m</span>
                </div>
                </Link>
                <div className='btnDiv'>
                    <Link to="../ReadStoryBackground" state={{ bus_stop:data.bus_stop, distance:data.distance }} style={{ textDecoration: "none" }}>
                        <button className='menuBtn'>편지 읽기</button>
                    </Link>
                    <Link to="../WriteStory" state={{ bus_stop:data.bus_stop, distance:data.distance }} style={{ textDecoration: "none" }}>
                        <button className='menuBtn'>편지 쓰기</button>
                    </Link>
                    <Link to="../MyPageBackground/Mypage" bus_stop={{ name:data.bus_stop, distance:data.distance }} style={{ textDecoration: "none" }}>
                        <button className='menuBtn'>마이 페이지</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;