import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../style/MyPage.css';
import Post from './Post';
import InputStory from './InputStory'
import Button from './Button'
import { useLocation, useNavigate } from 'react-router-dom';

function MyPage() {
    const [posts, setPosts] = useState([])
    const server = process.env.REACT_APP_SERVER
    const location = useLocation()
    const data = location.state
    const nav = useNavigate()
    const [selected, setSelected] = useState(false)
    const [selectedId, setSelectedId] = useState(false)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [reversePosts, setRever] = useState([])
    
    useEffect(() => {
        setRever(posts.reverse())
        console.log(reversePosts)
    }, [posts])

    const postUpdate = async () => {
        try {
            await axios.put(`${server}/board/${selectedId}`, {
                title,
                content
            })
        } catch(error) {
            console.error("Error : ", error)
        }

        alert("수정에 성공하였습니다")
        nav('../../MenuPage', {
            state: {
                name: data.name,
                num: data.num,
                toWhere: data.toWhere,
                distance: data.distance,
            },
        })
    }

    const postDelete = async () => {
        try {
            await axios.delete(`${server}/board/${selectedId}`)
        } catch(error) {
            console.error("Error : ", error)
        }

        alert("글이 삭제되었습니다")
        nav('../../MenuPage', {
            state: {
                name: data.name,
                num: data.num,
                toWhere: data.toWhere,
                distance: data.distance,
            },
        })
    }

    useEffect(() => {
        if(selectedId) {
            const selectedPost = posts.find(post => post.text_id === selectedId);
            if(selectedPost) {
                setTitle(selectedPost.title);
                setContent(selectedPost.content);
            }
        }
    }, [selectedId, posts])

    useEffect(() => {
        const getAll = async () => {
            try {   
                const response = await axios.get(`${server}/board`)
                setPosts(response.data)
            } catch(error) {
                console.error("Error", error)
            }
        }

        getAll()
    }, [])

    const [opacity, setOpacity] = useState(1)

    const cssEffect = () => {
        const fadeOut = setInterval(() => {
            setOpacity((prev) => {
                if(prev <= 0) {
                    clearInterval(fadeOut)
                    return 0
                }
    
                return prev - 0.1
            })
        }, 40)
    }

    useEffect(() => {
        if(selected) cssEffect()
    }, [selected]) 

    const cssPostList = {
        ...(!selected && {
            overflowY : 'scroll',
            msOverflowStyle : 'none',
            scrollbarWidth: 'none'
        })
    }

    return (
        <>
            <h1 className='MyPageMainTitle' style={{opacity : opacity}}>내가 공유한 이야기</h1>
            <ul className='PostList' style={cssPostList}>
                {reversePosts.map((item) => (
                    <Post 
                        data={item}
                        key={item.textId-1}
                        onClick={() => {
                            setSelectedId(item.textId)
                            setSelected(true)
                        }}
                        isSelected={selected}
                        selectedId={selectedId == item.textId ? selectedId : false}
                    />
                ))}
            </ul>
            {selected && 
            <InputStory 
                use={"modify"} 
                selected={selected}
                title={title}
                content={content}
                setTitle={setTitle}
                setContent={setContent}
                onClick={() => {
                    if(window.confirm("정말 삭제하시겠습니까?")) postDelete()
                }}
            />}
            <div className="buttonContainer">
                <Button 
                    content={selected ? "수정 완료!" : "뒤로가기"}
                    onClick={() => {
                        if(!selected) {
                            nav('../../MenuPage', {
                                state: {
                                    name: data.name,
                                    num: data.num,
                                    toWhere: data.toWhere,
                                    distance: data.distance,
                                },
                            })
                        }
                        else if(title.length < 1 || content.length < 1 ) alert("공백은 입력하실 수 없습니다")
                        else postUpdate()
                    }}
                />
            </div>
        </>
    )
}

export default MyPage;