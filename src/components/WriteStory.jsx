import React from 'react'
import '../style/writeStory.css'
import backIcon from '../images/backIcon.png'
import InputStory from '../components/InputStory'

const WriteStory = () => {
    return (
        <div className="WriteBackground">
            <img src={backIcon} alt="back" className="back"/>
            <InputStory />
        </div>
    )
}

export default WriteStory