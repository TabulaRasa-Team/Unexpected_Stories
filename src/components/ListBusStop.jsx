import React from 'react';
import '../style/ListBusStop.css';
import { Link } from 'react-router-dom';

function ListBusStop({ BusStop }) {
    return (
        <Link to="/MenuPage" state={{name:BusStop.name,num:BusStop.num,toWhere:BusStop.toWhere,distance:BusStop.distance}} style={{ textDecoration: "none"}}>
            <li>
                <div className='busStop'>
                    <div>
                        <span>{BusStop.name}</span><br />
                        <span className='info'>{BusStop.num}   |   {BusStop.toWhere} 방면</span>
                    </div>
                    <span className='distance'>{BusStop.distance}M</span>
                </div>
            </li>
        </Link>
    );
}

export default ListBusStop;