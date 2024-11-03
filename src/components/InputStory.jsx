import {React, useState, useEffect} from 'react'
import '../style/inputStory.css'

const InputStory = ({use, selected, title, setTitle, content, setContent}) => {
    const [opacity, setOpacity] = useState(0)

    const cssEffect = () => {
        const fadeOut = setInterval(() => {
            setOpacity((prev) => {
                if(prev >= 1) {
                    clearInterval(fadeOut)
                    return 1
                }
    
                return prev + 0.1
            })
        }, 40)
    }

    useEffect(() => {
        if(selected) cssEffect()
    }, [selected]) 

    let storyStyle = {
        ...(use === 'modify' && {
            marginTop : "-59vh",
            width : "19em",
            height : "60vh",
            opacity : opacity,
            position : "relative",
            zIndex : "1000"
        })
    }

    return (
        <div className="inputContainer" style={storyStyle}>
            <input
                className="inputTitle" 
                type="text" 
                placeholder="제목.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <hr/>
            <textarea
                className="inputContent"
                type="text" 
                placeholder="자유롭게 자신의 이야기를 공유해봐요.&#13;&#10;아무 이야기나 괜찮아요!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
    )
}

export default InputStory