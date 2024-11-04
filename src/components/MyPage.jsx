import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../style/MyPage.css';
import Post from './Post';
import InputStory from './InputStory'
import Button from './Button'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MyPage() {
    const [posts, setPosts] = useState([])
    const server = process.env.REACT_APP_SERVER
    const location = useLocation()
    const data = location.state
    const [selected, setSelected] = useState(false)
    const [selectedId, setSelectedId] = useState(false)

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


    return (
        <>
            <h1 className='MyPageMainTitle' style={{opacity : opacity}}>내가 공유한 이야기</h1>
            <ul className='PostList'>
                {posts.map((item) => (
                    <Post 
                        data={item}
                        key={item.text_id-1}
                        onClick={() => {
                            setSelectedId(item.text_id)
                            setSelected(true)
                        }}
                        isSelected={selected}
                        selectedId={selectedId == item.text_id ? selectedId : false}
                    />
                ))}
            </ul>
            {selected && <InputStory use={"modify"} selected={selected}/>}
            <div className="buttonContainer">
                <Link to='../../MenuPage' state={{name:data.name,num:data.num,toWhere:data.toWhere,distance:data.distance}} style={{ textDecoration: "none"}}>
                    <Button content={"뒤로가기"} />
                </Link>
            </div>
        </>
    )
}

export default MyPage;