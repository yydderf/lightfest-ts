import './stories.scss'

// import mountain from "/img/11-01.png"
import background from "/img/new-4.png"

const messages = [
    "在一片遼闊的海域中，隱藏著一座古老的島嶼。此地的島民們與大自然緊密相依，島的核心，一個古老的火壇高聳入雲，其熊熊火焰如同島嶼的心臟，賦予這片土地無窮的溫暖與活力。",
    "神聖的火焰需要島民們定期穿越森林和山巒，帶著木柴讓火光持續照亮島嶼。每個人都希望其他人去添木柴，而不願意親自出力。",
    "島民們不再願意出門添加木柴。慢慢地，冰冷的氣息籠罩這片土地。曾經繁花似錦的樹林和青蔥的草地逐漸在寒風中凋零。",
    "當探勘小隊發現火壇的火苗幾乎熄滅時，人們意識到他們必須採取行動，並自發性組成志願隊去添火。",
    "最後，島上的溫暖逐漸回歸，，人們重新感受到團結和責任的力量。",
]

const Stories = () => {
    return (
        <div className="stories-wrapper" style={{backgroundImage: `url(${background})`,  height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
            {/* <img src={mountain} style={{position: "absolute", top: "300vh", width: "100%", height: "100vh", opacity: "0.3"}}/> */}
            <div className="stories-header">
                {/* <span>{messages[0]}</span> */}
            </div>
            <div className="stories-container">
                <div className="stories-box">
                    <h2>第一章：遺忘</h2>
                    <p>{messages[1]}</p>
                </div>
                <div className="stories-box">
                    <h2>第二章：警鐘</h2>
                    <p>{messages[2]}</p>
                </div>
                <div className="stories-box">
                    <h2>第三章：覺醒</h2>
                    <p>{messages[3]}</p>
                </div>
                <div className="stories-box">
                    <h2>第四章：重燃</h2>
                    <p>{messages[4]}</p>
                </div>
            </div>
        </div>
    )
}

export default Stories