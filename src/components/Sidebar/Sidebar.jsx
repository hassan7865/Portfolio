import { useState } from 'react'
import './Sidebar.scss'
import ToggleButton from './button/ToggleButton'
import Links from './links/Links'
import {motion} from 'framer-motion'
export default function Sidebar(){
    const [Open,setopen]=useState(false)
    const variant ={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }
    return(
       <motion.div animate={Open?"open":"closed"} className="sidebar">
        <motion.div className="bg" variants={variant}>
            <Links/>
        </motion.div>
        <ToggleButton setopen={setopen}/>
       </motion.div>
    )
}