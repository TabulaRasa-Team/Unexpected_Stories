import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../style/ReadStoryPost.css'
import tts from '../images/tts.svg'
import location_pic from '../images/location.svg'

const ReadStoryPost = ({setTextId}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [busStop, setBusStop] = useState('')
    const server = process.env.REACT_APP_SERVER
    
    useEffect(() => {
        const randomPost = async () => {
            try {
                const response = await axios.get(`${server}/board/random`)
                setTextId(response.data.textId)
                setTitle(response.data.title)
                setContent(response.data.content)
                setDate(response.data.date)
                setBusStop(response.data.busStop)
            } catch(error) {
                console.error("Error : ", error)
            }
        }

        randomPost()

        return () => {
            window.responsiveVoice.cancel();
        }
    }, [])

    return (
        <>
            <div className="read_location">
                <img src={location_pic} alt="location" />
                <h3>{busStop}에서 작성</h3>
            </div>
            <div className="readContainer">
                <h2 className='readTitle'>{title}</h2>
                <hr />
                <span className='readContent'>{content}</span>
                <footer className='readFooter'>
                    <div>
                        <img src={tts} onClick={() => {
                            window.responsiveVoice.speak(title + "." + content, "Korean Male", {
                                rate : 0.8
                            });
                        }}/>
                    </div>
                    <h4>{date.slice(0, 4)}/{date.slice(5, 7)}/{date.slice(8, 10)} {date.slice(11,13)}:{date.slice(14, 16)} 작성</h4>
                </footer>
            </div>
        </>
    )
}

export default ReadStoryPost