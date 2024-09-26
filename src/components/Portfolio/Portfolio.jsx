import { useRef } from 'react'
import './portfolio.scss'
import { useScroll, useSpring,motion, useTransform } from 'framer-motion'

const Items = [
    {
        id: 1,
        title: "E-Learning App LearnIt",
        img: "/learnit.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam eum aliquam blanditiis doloremque perspiciatis quo exercitationem facere quis temporibus, dignissimos ipsa expedita, optio hic. Hic ducimus ipsum atque aspernatur?"
    },
    {
        id: 2,
        title: "NextJS ChatApp",
        img: "/chatapp.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam eum aliquam blanditiis doloremque perspiciatis quo exercitationem facere quis temporibus, dignissimos ipsa expedita, optio hic. Hic ducimus ipsum atque aspernatur?"
    },
    {
        id: 3,
        title: "FullStack NAC Panel",
        img: "/Nac.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam eum aliquam blanditiis doloremque perspiciatis quo exercitationem facere quis temporibus, dignissimos ipsa expedita, optio hic. Hic ducimus ipsum atque aspernatur?"
    },
    {
        id: 4,
        title: "NextJS WeatherApp",
        img: "/Weather.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam eum aliquam blanditiis doloremque perspiciatis quo exercitationem facere quis temporibus, dignissimos ipsa expedita, optio hic. Hic ducimus ipsum atque aspernatur?"
    }
]
const Single = ({ item }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref})
    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return (
        <section id='Projects' >
            <div className="Cont">
                <div className="Wrapper">
                <img ref={ref} src={item.img}></img>
                <motion.div className="textCont" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Live</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]})
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Work</h1>
                <motion.div style={{scaleX}} className='progressbar'></motion.div>
            </div>
            {Items.map((item)=>(
                <Single item={item}/>
            ))}
        </div>

    )
}

export default Portfolio