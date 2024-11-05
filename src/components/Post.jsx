import {React, useState, useEffect, useRef} from 'react';
import '../style/Post.css'
import favorite from '../images/Favorite_light.svg'
import view from '../images/Eye_light.svg'

const Post = ({data, isSelected, selectedId, onClick}, key) => {
    const [opacity, setOpacity] = useState(1)
    const [move, setMove] = useState(0)
    const position = useRef(0)

    let cssEffectStyle = {
        opacity: opacity,
        transform: `translateY(${move}px)`,
        ...(selectedId && {
            position : 'absolute',
            width : '100%'
        })
    }
    
    const cssEffect = () => {
        if(!selectedId) {
            const fadeOut = setInterval(() => {
                setOpacity((prev) => {
                    if(prev <= 0) {
                        clearInterval(fadeOut)
                        return 0
                    }

                    return prev - 0.1
                })
            }, 40)
        } else if(position.current) {
            const coordinate_Y = position.current.getBoundingClientRect().top
            const moveDistance = 40 - coordinate_Y

            const moveUp = setInterval(() => {
                setMove((prev) => {
                    if(prev <= moveDistance) {
                        clearInterval(moveUp)
                        return moveDistance
                    }

                    return prev - 1.8
                }, 10)
            })

            cssEffectStyle = {
                top : moveDistance
            }
        }
    }

    useEffect(() => {
        if(isSelected) cssEffect()
    }, [isSelected])

    return (
        <li ref={position} onClick={onClick} style={cssEffectStyle}>
            <div>
                {!selectedId && <h3 className='date' >{data.date.slice(2, 4)}년 {data.date.slice(5, 7)}월 {data.date.slice(8, 10)}일</h3>}
                <div className='article'>
                    <div className='articleFront'>
                        <h4 className='articleTitle'>{data.title}</h4>
                        <span className='content'>{data.content}</span>
                    </div>
                    <div className='articleBack'>
                        <div className='articleItem'>
                            <img src={favorite} alt="좋아요" /><div> 1423</div>
                        </div>
                        <div className='articleItem'>
                            <img src={view} alt="조회수" /><div> 9483</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Post;