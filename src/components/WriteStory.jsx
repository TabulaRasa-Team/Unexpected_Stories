import React from 'react'
import '../style/writeStory.css'
import backIcon from '../images/backIcon.png'
import InputStory from '../components/InputStory'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const WriteStory = () => {
    const location = useLocation();
    const data = location.state;
    
    return (
        <div className="WriteBackground">
            <Link to='../MenuPage' state={{name:data.name,num:data.num,toWhere:data.toWhere,distance:data.distance}} style={{ textDecoration: "none"}}>
            <img src={backIcon} alt="back" className="back"/>
            </Link>
            <InputStory />
            <Button content={"작성 완료!"}/>
        </div>
    )
}

export default WriteStory