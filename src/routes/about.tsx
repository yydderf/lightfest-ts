import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { animated, useTransition, useSpring, useChain, config, useSpringRef } from '@react-spring/web'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useFBX } from '@react-three/drei'

import "./root.css"

// import background from "/img/mountains.png"
import background from "/img/longbackground.png"
import mountain_loading from "/gif/loading_m.gif"

export default function App() {
  const total_pages = 10
  const parallax = useRef<IParallax>(null!)
  const [screenLoading, setScreenLoading] = useState(false);

  const scrollToNext = () => {
    if (parallax.current && !showWork) {
        parallax.current.scrollTo((parallax.current.offset + 1) % total_pages)
    }
  }

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
      </Parallax>
    </div>
  )}
  </>
  );
}

