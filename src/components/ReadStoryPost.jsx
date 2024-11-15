import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../style/ReadStoryPost.css'
import sound from '../images/sound.png'
import speaker from '../images/speaker.png'

const ReadStoryPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const server = process.env.REACT_APP_SERVER
    
    useEffect(() => {
        const randomPost = async () => {
            try {
                const response = await axios.get(`${server}/board/random`)
                setTitle(response.data.title)
                setContent(response.data.content)
                setDate(response.data.date)
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
            <div className="readContainer">
                <h2 className='readTitle'>{title}</h2>
                <hr />
                <span className='readContent'>{content}</span>
                <footer className='readFooter'>
                    <div>
                        <img src={sound} />
                        <img src={speaker} onClick={() => {
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