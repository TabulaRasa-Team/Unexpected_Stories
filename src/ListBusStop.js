import React from 'react';
import './ListBusStop.css';

function ListBusStop({ BusStop }) {
    return (
        <li>
            <div className='busStop'>
                <div>
                    <span>{BusStop.name}</span><br/>
                    <span className='info'>{BusStop.num}   |   {BusStop.toWhere}</span>
                </div>
                <span className='distance'>{BusStop.distance}M</span>
            </div>
        </li>
    );
}

export default ListBusStop;