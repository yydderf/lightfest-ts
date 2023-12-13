import "./trailer.scss"
import ReactPlayer from 'react-player';

import banner from "/img/new-4.png"

const url = "https://www.youtube.com/watch?v=8p-bgUZy8go";
const width = 960
const height = 540

const Trailer = () => {
    return (
        <section>
            <div className="trailer-wrapper" style={{backgroundImage: `url(${banner})`,  height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="txt-conainer">
                    <h1>預告片</h1>
                </div>
                <div className="player-container">
                    <ReactPlayer className="player" url={url} width={width} height={height}/>
                </div>
            </div>
        </section>
    )
}

export default Trailer