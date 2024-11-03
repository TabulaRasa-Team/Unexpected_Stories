import React from 'react';
import '../style/ReadStoryBackground.css'

const ReadStoryBackground = ()=>{
    return(
        <>
        <video className='bg-video' preload="auto" autoPlay muted>
            <source src='/BusAnimation.mp4' type="video/mp4"/>
        </video>
        </>
    );
}

export default ReadStoryBackground