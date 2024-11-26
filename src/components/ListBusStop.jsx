import {React} from 'react';
import '../style/ListBusStop.css';
import { Link } from 'react-router-dom';

function ListBusStop({ BusStop }) {
    const bus_stop = BusStop[1].substring(11)
    const distance = BusStop[2].substring(11)

    return (
        <Link to="/MenuPage" state={{bus_stop:bus_stop, distance:distance}} style={{ textDecoration: "none"}}>
            <li>
                <div className='busStop'>
                    <span className="bustStopName">{bus_stop}</span>
                    <span className='distance'>{distance}m</span>
                </div>
            </li>
        </Link>
    );
}

export default ListBusStop;