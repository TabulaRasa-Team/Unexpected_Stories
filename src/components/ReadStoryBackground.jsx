import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import '../style/ReadStoryBackground.css'

const ReadStoryBackground = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('ReadStory');
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