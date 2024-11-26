import {React, useRef, useState, useEffect} from 'react';
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import '../style/ReadStory.css'
import ReadStoryPost from './ReadStoryPost'
import happy_emoji from '../images/happy_emoji.svg'
import kiss_emoji from '../images/kiss_emoji.svg'
import tear_emoji from '../images/tear_emoji.svg'
import Button from './Button'

const ReadStory = () => {
    const server = process.env.REACT_APP_SERVER
    const [textId, setTextId] = useState('')
    const location = useLocation()
    const data = location.state
    const emoji_src = useRef([happy_emoji, tear_emoji, kiss_emoji])

    const doEmpathy = async (empathy) => {
        try {
            await axios.patch(`${server}/board/${empathy}/${textId}`)
        } catch(error) {
            console.error('Error : ', error)
        }
    }

    return (
        <div className='bg-container'>
            <ReadStoryPost setTextId={setTextId}/>
            <div className='emojis'>
                {emoji_src.current.map((emoji) => (
                    <img 
                        src={emoji} 
                        alt="emoji"
                        onClick={() => {
                            let empathy
                            if(emoji.includes('happy')) empathy = 'like'
                            else if(emoji.includes('tear')) empathy = 'sad'
                            else empathy = 'love'

                            if(localStorage.getItem(`empathy_${textId}`) !== 'true') {
                                doEmpathy(empathy)
                                localStorage.setItem(`empathy_${textId}`, 'true')
                            }
                        }}
                    />
                ))}
            </div>
            <Link to='/MenuPage' state={{ bus_stop:data.bus_stop, distance:data.distance }} style={{ textDecoration: "none"}}>
                <Button content={"편지 닫기"} margin="5% auto"/>
            </Link>
        </div>
    )
}

export default ReadStory