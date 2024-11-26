import {React, useEffect} from 'react';
import ListBusStop from './ListBusStop';
import '../style/ChoiceBusStop.css';

function ChoiceBusStop({bus_stops, findBusStop, setLatitude, setLongitude}) {
    
    const handleReload = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        findBusStop()
    }

    useEffect(() => {
        handleReload()
    }, [])

    return (
        <div>
            <span className='title'>
                    어느 정류장의 이야기를 해볼까?
            </span>
            <span className="small_title">
                    근처 500m 내 정류장만 표시돼요
            </span>
            <ul>
                {bus_stops.map((item) => (
                    <ListBusStop BusStop={item}/>
                ))}
            </ul>
            <button className='reload' onClick={handleReload}>새로고침</button>
        </div>
    );
};

export default ChoiceBusStop;