import React from 'react';
import ListBusStop from './ListBusStop';
import '../style/ChoiceBusStop.css';
import { Link } from 'react-router-dom';

function ChoiceBusStop() {
    let BusStopDummy = [
        {
            id: 1,
            name: "한밭대학교",
            num: "41680, 41690",
            toWhere: "수통골삼거리",
            distance: 384
        },
        {
            id: 2,
            name: "수통골입구",
            num: "45770, 45760",
            toWhere: "한밭대학교",
            distance: 235
        },
        {
            id: 3,
            name: "삼성화재연수원",
            num: "41710, 41730",
            toWhere: "신협연수원",
            distance: 235
        }
    ];
    return (
        <div>
            <span className='title'>
                    어느 정류장의 이야기를 해볼까?
            </span>
            <ul>
                {BusStopDummy.map((item) => (
                    <ListBusStop BusStop={item} key={item.id} />
                ))}
            </ul>
            <Link to="/ChoiceBusStop" style={{ textDecoration: "none" }} >
                <button className='reload'>새로고침</button>
            </Link>
        </div>
    );
};

export default ChoiceBusStop;