import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../style/ReadStoryPost.css'
import sound from '../images/sound.png'
import speaker from '../images/speaker.png'

const ReadStoryPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [text_id, setTextId] = useState(0)
    const server = process.env.REACT_APP_SERVER

    
    useEffect(() => {
        const randomPost = async () => {
            try {
                const response = await axios.get(`${server}/board/random`)
                setTextId(response.data.random)
            } catch(error) {
                console.error("Error : ", error)
            }
        }

        randomPost()
    }, [])

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`${server}/board/${text_id}`)
                setTitle(response.data.title)
                setContent(response.data.content)
                setDate(response.data.date)
            } catch(error) {
                console.error("Error : ", error)
            }
        }

        if(text_id) getPost()
    }, [text_id])

    return (
        <>
            <div className="readContainer">
                <h2 className='readTitle'>{title}</h2>
                <hr />
                <span className='readContent'>{content}</span>
                <footer className='readFooter'>
                    <div>
                        <img src={sound} />
                        <img src={speaker} />
                    </div>
                    <h4>{date}</h4>
                </footer>
            </div>
        </>
    )
}

export default ReadStoryPost