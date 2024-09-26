import { useRef } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
const variant = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}
const Contact = () => {
    return (
        <motion.div   className="contact"  variants={variant} initial="initial" whileInView="animate">
            <motion.div className="textContainer">
                <motion.h1>Lets work together</motion.h1>
                <motion.div className="item">
                    <h2>Mail</h2>
                    <p>m.hassansiddiqui9245@gmail.com</p>
                </motion.div>
                <motion.div className='item'>
                    <h2>Phone Number</h2>
                    <p>03218783619</p>
                </motion.div>
            </motion.div>
            <div className="ImageContainer">
                <img src='/contact.png'></img>
            </div>
        </motion.div>
    )
}

export default Contact