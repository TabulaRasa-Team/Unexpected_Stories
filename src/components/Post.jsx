import React from 'react';
import '../style/Post.css'
import favorite from '../images/Favorite_light.svg'
import view from '../images/Eye_light.svg'


const Post = (content, key) => {
    let data = content.content
    return (
        <>
            <li>
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
        </>
    )
}

export default Post;