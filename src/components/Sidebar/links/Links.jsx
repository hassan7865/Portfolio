import React from 'react'
import {motion} from "framer-motion"
const items=[
  "Homepage",
  "About",
  "Projects",
  "Contact",
]
const variant = {
  open:{
    transition:{
      staggerChildren:0.1,
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }
}
const itemsvariant = {
  open:{
    y:0,
    opacity:1
  },
    closed:{
     y:50,
     opacity:0
  }
}
const Links = () => {
  return (
    <motion.div className='links' variants={variant}>
      {items.map((item)=>(
        <motion.a 
        variants={itemsvariant} 
        href={`#${item}`} 
        key={item}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        >{item}
        </motion.a>
      ))
    }
      </motion.div>
  )
}


export default Links