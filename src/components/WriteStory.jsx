import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/writeStory.css'
import backIcon from '../images/backIcon.png'
import InputStory from '../components/InputStory'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const WriteStory = () => {
    const server = process.env.REACT_APP_SERVER
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const location = useLocation();
    const nav = useNavigate()
    const data = location.state;

    const writePost = async () => {
        try {
            await axios.post(`${server}/board`, {
                title,
                content
            })

            setTitle('')
            setContent('')
            alert("소중한 이야기 감사합니다")
            nav('/MenuPage', {
                state: {
                    name: data.name,
                    num: data.num,
                    toWhere: data.toWhere,
                    distance: data.distance
                }
            })
        } catch(error) {
            console.error("Error : ", error)
            alert(error)
        }
    }
    
    return (
        <div className="WriteBackground">
            <Link to='../MenuPage' state={{name:data.name,num:data.num,toWhere:data.toWhere,distance:data.distance}} style={{ textDecoration: "none"}}>
            <img src={backIcon} alt="back" className="back"/>
            </Link>
            <InputStory 
                use={"post"} 
                title={title} 
                setTitle={setTitle}
                content={content}
                setContent={setContent}
            />
            <Button content={"작성 완료!"} onClick={() => {
                if(title.length > 0 || content.length > 0) writePost()
                else alert("소중한 이야기를 들려주세요")
            }}
            />
        </div>
    )
}

export default WriteStory