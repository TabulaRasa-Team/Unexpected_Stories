import React from 'react';
import ListBusStop from './ListBusStop';
import '../style/ChoiceBusStop.css';
import { Link } from 'react-router-dom';


function ChoiceBusStop() {
    let BusStopDummy = [
        {
            id: 1,
            name: "부산소프트웨어마이스터고교",
            num: "12615, 92207, 1578",
            toWhere: "죽림사거리",
            distance: 13
        },
        {
            id: 2,
            name: "죽림",
            num: "1252, 3516, 13455",
            toWhere: "덕포마을",
            distance: 153
        },
        {
            id: 3,
            name: "죽림삼거리",
            num: "12612, 1575, 92399",
            toWhere: "부산소프트웨어마이스터고교",
            distance: 232
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
            <Link to="/ChoiceBusStop" style={{ textDecoration: "none" }}>
                <button className='reload'>새로고침</button>
            </Link>
        </div>
    );
};

export default ChoiceBusStop;