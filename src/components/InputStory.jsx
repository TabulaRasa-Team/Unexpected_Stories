import React from 'react'
import '../style/inputStory.css'

const InputStory = () => {
    return (
        <div className="inputContainer">
            <input
                className="inputTitle" 
                type="text" 
                placeholder="제목.."
            />
            <hr/>
            <textarea
                className="inputContent"
                type="text" 
                placeholder="자유롭게 자신의 이야기를 공유해봐요.           
                아무 이야기나 괜찮아요!"
            />
        </div>
    )
}

export default InputStory