import React from 'react';
import '../style/ReadStoryPost.css'
import sound from '../images/sound.png'
import speaker from '../images/speaker.png'

const ReadStoryPost = () => {
    return (
        <>
            <div className="readContainer">
                <h2 className='readTitle'>더미</h2>
                <hr />
                <span className='readContent'>
                    계절이 지나가는 하늘에는 가을로 가득 차 있습니다.
                    나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다.
                    가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.
                    별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.
                    소학교 때 책상을 같이 했던
                </span>
                <footer className='readFooter'>
                    <div>
                        <img src={sound} />
                        <img src={speaker} />
                    </div>
                    <h4>2024/09/09 18:35 작성</h4>
                </footer>
            </div>
        </>
    )
}

export default ReadStoryPost