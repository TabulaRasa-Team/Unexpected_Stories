import React from 'react';
import '../style/ReadStory.css'
import ReadStoryPost from './ReadStoryPost'

const ReadStory = () => {
    console.log("hello")
    return (
        <div className='bg-container'>
            <ReadStoryPost/>
        </div>
    )
}

export default ReadStory