import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import '../style/ReadStoryBackground.css'
import { Link, useLocation } from 'react-router-dom'

const ReadStoryBackground = () => {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('ReadStory', {
                state: {
                    name: data.name,
                    num: data.num,
                    toWhere: data.toWhere,
                    distance: data.distance
                }
            });
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <Outlet />
            <div className='night1'>
                <div class="shooting_star1"></div>
            </div>
        </>
    );
}

export default ReadStoryBackground