import { React, useRef, useState, useEffect } from 'react';
import '../style/Post.css';
import favorite from '../images/Favorite_light.svg';
import view from '../images/Eye_light.svg';

const Post = ({ data, isSelected, selectedId, onClick }) => {
    const position = useRef(null);
    const [topPosition, setTopPosition] = useState("100%");

    useEffect(() => {
        if (selectedId === data.textId) {
            setTimeout(() => setTopPosition("4%"), 50); 
        } else if (!isSelected) {
            setTopPosition("50%");
        }
    }, [selectedId, data.textId, isSelected]);

    const cssEffectStyle = {
        display: selectedId === data.textId || !isSelected ? "block" : "none",
        position: selectedId === data.textId ? "absolute" : "relative",
        top: selectedId === data.textId ? topPosition : "initial",
        width: "100%",
        transition: "top 0.5s ease-in-out", 
    };

    return (
        <li ref={position} onClick={onClick} style={cssEffectStyle}>
            <div>
                {!selectedId && (
                    <h3 className="date">
                        {data.date.slice(2, 4)}년 {data.date.slice(5, 7)}월 {data.date.slice(8, 10)}일
                    </h3>
                )}
                <div className="article">
                    <div className="articleFront">
                        <h4 className="articleTitle">{data.title}</h4>
                        <span className="content">{data.content}</span>
                    </div>
                    <div className="articleBack">
                        <div className="articleItem">
                            <img src={favorite} alt="좋아요" />
                            <div> {data.like + data.love + data.sad}</div>
                        </div>
                        <div className="articleItem">
                            <img src={view} alt="조회수" />
                            <div> {data.view}</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Post;
