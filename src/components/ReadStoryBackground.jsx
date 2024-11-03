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
            <video className='bg-video' preload="auto" autoPlay muted>
                <source src='/BusAnimation.mp4' type="video/mp4" />
            </video>

        </>
    );
}

export default ReadStoryBackground