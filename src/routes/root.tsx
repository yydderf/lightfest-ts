import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import "./root.css"

import background from "/img/longbackground.png"

// import mountain_loading from "/gif/mountain_loading.gif"
import mountain_loading from "/gif/loading_m.gif"

const rootBackgroundStyle = {
  position: 'absolute',
  width: '100vw',
  height: '1000vh',
  backgroundImage: `url(${background})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  top: 0,
  bottom: 0,
};

const p1Message = [
  "在一片遼闊的海域中，",
  "隱藏著一座古老的島嶼。",
  "此地的島民們與大自然緊密相依，",
  "島的核心，",
  "一個古老的火壇高聳入雲，",
  "其熊熊火焰如同島嶼的心臟，",
  "賦予這片土地無窮的溫暖與活力。"
];

const p2Message = [
  "然而，神聖的火焰需要島民們定期穿越森林和山巒，",
  "帶著木柴讓火光持續照亮島嶼。",
  "隨著時光的流轉，",
  "這個神聖的使命漸漸在人們的心中失去了光芒，",
  "變得沉重而疲憊。"
]

const p3Message = [
  "島民們不再願意出門添加木柴，",
  "期待他人肩負起這份責任。",
  "慢慢地，冰冷的氣息籠罩這片土地。",
  "曾經繁花似錦的樹林和青蔥的草地逐漸在寒風中凋零。"
]

export default function Root() {
  const parallax = useRef<IParallax>(null)

  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
  }, []);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <> {screenLoading ? (
      <div className="load" onClick={() => setScreenLoading(false)}>
        <img className="gif" src={mountain_loading}/>
        {/* <h2 className="load_w">點擊開始</h2> */}
      </div>
    ): (
      <>
      <Parallax ref={parallax} pages={10}>
        <ParallaxLayer offset={0} speed={0} factor={3}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
          />
        <ParallaxLayer offset={0} speed={-0.6} style={{height: "100vh"}} onClick={() => scroll(2)}>
          <div className="title">
            <h1 className="text-white word">
              光嶼
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className="progress-bar" sticky={{start: 0, end: 12}}>
          <span className="dot" onClick={() => window.location.replace("/#title")}/>
          <div className="vl" />
          <span className="dot" onClick={() => window.location.replace("/#introduction")}/>
          <div className="vl" />
          <span className="dot" />
          <div className="vl" />
          <span className="dot" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.1} onClick={() => scroll(4)}>
          <div className="content">
            <h1 className="story" id="introduction">
              {p1Message}
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.1}>
          <div className="content">
            <h1 className="story">
              {p2Message}
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={-0.1}>
          <div className="content">
            <h1 className="story">
              {p3Message}
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0}>
        </ParallaxLayer>
      </Parallax>
      </>
    )}
    </>
  );
}
