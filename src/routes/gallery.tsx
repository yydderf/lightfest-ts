import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { animated, useTransition, useSpring, useChain, config, useSpringRef } from '@react-spring/web'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useFBX } from '@react-three/drei'

import "./root.css"

import background from "/img/longbackground.png"
import mountain_loading from "/gif/loading_m.gif"

import cloud4 from '/img/clouds/4.png'
import cloud5 from '/img/clouds/5.png'
import cloud6 from '/img/clouds/6.png'
import cloud7 from '/img/clouds/7.png'
import cloud8 from '/img/clouds/8.png'
import cloud9 from '/img/clouds/9.png'

const messages = [[
    "在一片遼闊的海域中，",
    "隱藏著一座古老的島嶼。",
    "此地的島民們與大自然緊密相依，",
    "島的核心，",
    "一個古老的火壇高聳入雲，",
    "其熊熊火焰如同島嶼的心臟，",
    "賦予這片土地無窮的溫暖與活力。"],
    [
    "然而，神聖的火焰需要島民們定期穿越森林和山巒，",
    "帶著木柴讓火光持續照亮島嶼。",
    "隨著時光的流轉，",
    "這個神聖的使命漸漸在人們的心中失去了光芒，",
    "變得沉重而疲憊。",
    "每個人都希望其他人去添木柴，",
    "而不願意親自出力。"],
    [
    "島民們不再願意出門添加木柴，",
    "期待他人肩負起這份責任。",
    "慢慢地，冰冷的氣息籠罩這片土地。",
    "曾經繁花似錦的樹林和青蔥的草地逐漸在寒風中凋零。"],
    [
    "當探勘小隊發現火壇的火苗幾乎熄滅時，",
    "人們意識到他們必須採取行動，",
    "並自發性組成志願隊去添火。"],
    [
    "最後，島上的溫暖逐漸回歸，",
    "人們重新感受到團結和責任的力量。"
    ]
]

const Scene = () => {
    const fbx = useFBX("/model/reignite")
    return <primitive object={fbx} scale={0.005} />;
}

export default function App() {
  const total_pages = 10
  const parallax = useRef<IParallax>(null!)
  const [screenLoading, setScreenLoading] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const scrollToNext = () => {
    if (parallax.current && !showWork) {
        parallax.current.scrollTo((parallax.current.offset + 1) % total_pages)
    }
  }

  const toggleWork: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    setShowWork(showWork => !showWork)
  }

  const springApi = useSpringRef()
  const workProps = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {width: "5%", opacity: 0.7},
    to: {width: showWork ? "100%" : "5%", height: showWork ? "75%" : "25%"},
  })

  const progressApi = useSpringRef()
  const progressProps = useSpring({
    ref: progressApi,
    config: config.slow,
  })

  const transApi = useSpringRef()
//   const transition = useTransition(showWork ? data : [], {
//     ref: transApi,
//     trail: 400 / data.length,
//     from: {opacity: 0, scale: 0},
//     enter: {opacity: 1, scale: 1},
//     leave: {opacity: 0, scale: 0}
//   }) 

  useChain(showWork ? [springApi, transApi] : [transApi, springApi], [
    0,
    showWork ? 0.1 : 0.6,
  ])

  useEffect(() => {
    setScreenLoading(true);
  }, []);
  return (
    <> {screenLoading ? (
      <div className="load" onClick={() => setScreenLoading(false)}>
        <img className="gif" src={mountain_loading}/>
        {/* <h2 className="load_w">點擊開始</h2> */}
      </div>
    ): (
    <div style={{ width: '100%', height: '100%', userSelect: "none"}}>
      <Parallax ref={parallax} pages={total_pages}>

        <ParallaxLayer offset={0} speed={0} factor={8} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} />
        <ParallaxLayer offset={8} speed={0} factor={4} style={{backgroundColor: "#6a7f9a"}} />
        <ParallaxLayer className="work-toggler-layer" sticky={{start: 2, end: 10}} style={{width: "100%"}} onClick={() => scrollToNext()}>
            {/* <div className="work-toggler" onClick={() => console.log(showWork)} /> */}
            {/* <animated.div className="work-toggler" onClick={() => setShowWork(showWork=> !showWork)} style={workProps}> */}
            {/* <animated.div className="work-toggler" onClick={() => setShowWork(showWork => !showWork)} style={workProps}> */}
            <animated.div className="work-toggler" onClick={toggleWork} style={workProps}>
                {/* {transition(() => (
                    <animated.div className="work-div">
                        <Canvas>
                            <Scene />
                            <OrbitControls />
                            <Environment preset='sunset' background />
                        </Canvas>
                    </animated.div>
                ))} */}
                {/* {transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{...style, background: item.css}}
                    />
                ))} */}
            </animated.div>
        </ParallaxLayer>
        <ParallaxLayer className="progress-layer" sticky={{start: 0, end: total_pages}} style={{width: "10%"}}>
            {/* <img src={info} style={{width: "30%"}} onClick={() => console.log(showWork)}/> */}
            <div className="progress-bar-right" onClick={() => console.log(showWork)}>
                <animated.div style={{display: "flex"}}>
                    <animated.div className="dot" onClick={() => parallax.current.scrollTo(0)}/>
                </animated.div>
                <animated.div className="vl" />
                <animated.div style={{display: "flex"}}>
                    <animated.div className="dot" onClick={() => parallax.current.scrollTo(2)}/>
                </animated.div>
                <animated.div className="vl" />
                <animated.div style={{display: "flex"}}>
                    <animated.div className="dot" onClick={() => parallax.current.scrollTo(4)}/>
                </animated.div>
                <animated.div className="vl" />
                <animated.div style={{display: "flex"}}>
                    <animated.div className="dot" onClick={() => parallax.current.scrollTo(6)}/>
                </animated.div>
                <animated.div className="vl" />
                <animated.div style={{display: "flex"}}>
                    <animated.div className="dot" onClick={() => parallax.current.scrollTo(8)}/>
                </animated.div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud5} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud6} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud7} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={cloud8} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          <img src={cloud4} style={{ display: 'block', width: '20%', marginLeft: '30%'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud9} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cloud4} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud5} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cloud6} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cloud7} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.1 }}>
          <img src={cloud9} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={cloud8} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5}  speed={-0.4} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
        </ParallaxLayer>

        <ParallaxLayer className="title" offset={0} speed={0.1} onClick={() => scrollToNext()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <h1 className="text-white word">
                光嶼
            </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} onClick={() => scrollToNext()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content">
            <h1 className="story">
              {messages[0]}
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="chapter">
            <h1 className="title">
                第一章：遺忘
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content">
            <h1 className="story">
              {messages[1]}
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="chapter">
            <h1 className="title">
                第二章：警鐘
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content">
            <h1 className="story">
              {messages[2]}
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="chapter">
            <h1 className="title">
                第三章：覺醒
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content">
            <h1 className="story">
              {messages[3]}
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="chapter">
            <h1 className="title">
                第四章：重燃
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={9} speed={0} onClick={() => scrollToNext()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content">
            <h1 className="story">
              {messages[4]}
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )}
  </>
  );
}

