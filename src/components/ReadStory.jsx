import React from 'react';
import '../style/ReadStory.css'
import ReadStoryPost from './ReadStoryPost'
import happy_emoji from '../images/happy_emoji.svg'
import kiss_emoji from '../images/kiss_emoji.svg'
import tear_emoji from '../images/tear_emoji.svg'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'

const ReadStory = () => {
    const location = useLocation();
    const data = location.state;
    return (
        <div className='bg-container'>
            <ReadStoryPost/>
            <div className='emojis'>
                <img src={happy_emoji}/>
                <img src={tear_emoji}/>
                <img src={kiss_emoji}/>
            </div>
            <Link to='../../MenuPage' state={{name:data.name,num:data.num,toWhere:data.toWhere,distance:data.distance}} style={{ textDecoration: "none"}}>
                <Button content={"편지 닫기"} margin="5% auto"/>
            </Link>
        </div>
    )
}

export default ReadStory