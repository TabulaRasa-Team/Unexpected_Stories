import React from 'react';
import '../style/ReadStory.css'
import ReadStoryPost from './ReadStoryPost'
import happy_emoji from '../images/happy_emoji.svg'
import kiss_emoji from '../images/kiss_emoji.svg'
import tear_emoji from '../images/tear_emoji.svg'

const ReadStory = () => {
    console.log("hello")
    return (
        <div className='bg-container'>
            <ReadStoryPost/>
            <div className='emojis'>
                <img src={happy_emoji}/>
                <img src={tear_emoji}/>
                <img src={kiss_emoji}/>
            </div>
        </div>
    )
}

export default ReadStory