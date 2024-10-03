import React from 'react'
import './MainTitle.css'

function MainPage(){
    return (
        <div>
            <h1 className='title'>
                어쩌다<br/>발견한<br/>이야기
            </h1>
            <span className='subtitle'>우리 동네를 스쳐 지나가는 사람들,<br/>
                그들이 주인공이 되어 들려주는 이야기
            </span>
            <button className='startBtn'><span>시작하기</span></button>
        </div>
    );
}

export default MainPage