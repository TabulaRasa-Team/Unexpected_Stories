import React from 'react'
import '../style/writeStory.css'
import backIcon from '../images/backIcon.png'
import InputStory from '../components/InputStory'
import Button from '../components/Button'

const WriteStory = () => {
    return (
        <div className="WriteBackground">
            <img src={backIcon} alt="back" className="back"/>
            <InputStory />
            <Button content={"작성 완료!"}/>
        </div>
    )
}

export default WriteStory