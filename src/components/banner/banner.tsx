import "./banner.scss"
import { motion } from "framer-motion";

import NavBar from "../nav/nav";

// import banner from "/img/mountains.png"
import banner from "/img/new-1.png"
// import banner from "/img/longbackground.png"

const verticalVariants = {
    init: {
        y: -500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        },
    },
};

const sideVariants = {
    init: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        },
    },
    scroll: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Banner = () => {
    return (
        <>
        {/* <NavBar /> */}
        <div className="banner-wrapper" style={{backgroundImage: `url(${banner})`,  height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center"}}>
        {/* // <div className="banner-wrapper"> */}
            <NavBar />
            <motion.div className="banner" initial="init" animate="animate">
                <div className="txt-container">
                    <div className="title-container">
                        <motion.h1 variants={verticalVariants}>光</motion.h1>
                        <motion.h1 variants={verticalVariants}>嶼</motion.h1>
                    </div>
                    {/* <motion.h1 variants={verticalVariants}>嶼</motion.h1> */}
                    <div className="subtitle-container">
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>L</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>I</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>G</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>H</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>T</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>F</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>E</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>S</motion.h2>
                        <motion.h2 variants={sideVariants} style={{overflow:"hidden"}}>T</motion.h2>
                    </div>
                </div>
                <div className="scroll-container">
                    <motion.div variants={sideVariants} animate="scroll" className="scroll"/>
                </div>
            </motion.div>
        </div>
        </>
    )
}

export default Banner