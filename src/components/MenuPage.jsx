import React from 'react';
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
            <img src={paperPlane} className='paperPlane' />
            <div className='content'>
                <Link to="../ChoiceBusStop">
                    <div className='busStop busStop2'>
                        <div>
                            <span>{data.name}</span><br />
                            <span className='info'>{data.num}   |   {data.toWhere}</span>
                        </div>
                        <span className='distance'>{data.distance}M</span>
                    </div>
                </Link>
                <button className='menuBtn'>편지 읽기</button>
                <Link to="../WriteStory">
                    <button className='menuBtn'>편지 쓰기</button>
                </Link>
                <button className='menuBtn'>마이 페이지</button>
            </div>
        </div>
    )
}

export default MenuPage;