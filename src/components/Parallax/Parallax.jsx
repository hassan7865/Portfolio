import { useRef } from 'react'
import './Parallax.scss'
import {motion,useScroll,useTransform} from 'framer-motion'
const Parallax = ({type}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className='parallax' ref={ref}>
        <motion.h1 style={{y:yText}}>{type === "work" ? "Projects":"About Me"}</motion.h1>
        <motion.div className="wallpaper"></motion.div>
        <motion.div  className="stars"></motion.div>
    </div>
  )
}

export default Parallax