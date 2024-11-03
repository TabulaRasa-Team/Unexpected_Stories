import {React, useState, useEffect} from 'react';
import '../style/Post.css'
import favorite from '../images/Favorite_light.svg'
import view from '../images/Eye_light.svg'

const Post = ({data, isSelected, selectedId, onClick}, key) => {
    const [opacity, setOpacity] = useState(1)

    let opacityStyle = {
        opacity: opacity,
        transition: 'opacity 0.1s'
    }


    console.log(selectedId)
    
    const IsOpacity = () => {
        if(!selectedId) {

            const fadeOut = setInterval(() => {
                setOpacity((prev) => {
                    if(prev <= 0) {
                        clearInterval(fadeOut)
                        return 0
                    }

                    return prev - 0.1
                })
            }, 70)
        } else {
            setOpacity(1)
        }
    }

    useEffect(() => {
        if(isSelected) IsOpacity()
    }, [isSelected])

    return (
        <li onClick={onClick} style={opacityStyle}>
            <div>
                <h3 className='date'>{data.date}</h3>
                <div className='article'>
                    <div className='articleFront'>
                        <h4 className='articleTitle'>{data.title}</h4>
                        <span className='content'>{data.content}</span>
                    </div>
                    <div className='articleBack'>
                        <div className='articleItem'>
                            <img src={favorite} alt="좋아요" /><div> {data.like}</div>
                        </div>
                        <div className='articleItem'>
                            <img src={view} alt="조회수" /><div> {data.view}</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Post;