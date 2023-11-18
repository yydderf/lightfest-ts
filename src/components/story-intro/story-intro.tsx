import "./story-intro.scss"


const message = "在一片遼闊的海域中，隱藏著一座古老的島嶼。此地的島民們與大自然緊密相依，島的核心，一個古老的火壇高聳入雲，其熊熊火焰如同島嶼的心臟，賦予這片土地無窮的溫暖與活力。"

const StoryIntro = () => {
    return (
        <div className="intro-wrapper">
            <div className="intro">
                <div className="msg-container">
                    <span>
                        {message}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StoryIntro