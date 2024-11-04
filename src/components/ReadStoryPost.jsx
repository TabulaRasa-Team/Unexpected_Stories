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
        const countPost = async () => {
            try {   
                const response = await axios.get(`${server}/board/count`)

                let randomId = Math.floor(Math.random() * (response.data.count - 1 + 1)) + 1
                setTextId(randomId);
            } catch(error) {
                console.error("Error", error)
            }
        }

        countPost()
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
                    <h4>2024/09/14 18:35 작성</h4>
                </footer>
            </div>
        </>
    )
}

export default ReadStoryPost