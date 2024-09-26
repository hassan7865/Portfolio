import React from 'react'
import './Hero.scss'
import {animate, motion} from 'framer-motion'
const Hero = () => {
  const textVariant = {
    initial:{
      x:-500,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1
      }
    }
  }
  const sliderText={
    initial:{
      x:0,
    },
    animate:{
      x:"-100%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20
      }
    }
    
  }
  return (
    <div className="hero" >
      <div className="Wrapper">
        <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
          <motion.h2 variants={textVariant}>Hassan Siddiqui</motion.h2>
          <motion.h1 variants={textVariant}>Full Stack Developer</motion.h1>
          <motion.div variants={textVariant} className='buttons'>
            <motion.button variants={textVariant}>See Latest Projects</motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slideText" variants={sliderText} initial="initial" animate="animate">
        Backend Frontend Software Engineer
      </motion.div>
      <div className="imageContainer">
        <img src='/picture.png'></img>
      </div>
    </div>
  )
}

export default Hero