import React, { useState } from 'react'
import './About.scss'
import TabsContent from '../TabContents.jsx/TabsContent'
const About = () => {
  const [tab,settab] = useState(1)
  console.log(tab)
  const handleChange=(tab)=>{
    settab(tab)
  }
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="imageContainer">
          <img src='/animate.gif'></img>
        </div>
        <div className='contentContainer'>
          <h1>About Me</h1>
          <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, excepturi corporis. Hic, numquam ab! Perspiciatis vero libero vel debitis fugit, impedit a recusandae labore veniam rem quo natus saepe ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tenetur laudantium error ipsum iste, illo blanditiis, delectus dicta cupiditate libero pariatur hic expedita commodi officiis harum animi iusto quia voluptatem.</p>
          <div className="tabs">
            <a onClick={()=>handleChange(1)} style={{ borderBottom: tab === 1 && "1px solid aqua" }}>Skills</a>
            <a onClick={()=>handleChange(2)} style={{ borderBottom: tab === 2 &&  "1px solid aqua" }} >Education</a>
            <a onClick={()=>handleChange(3)} style={{ borderBottom: tab === 3 &&  "1px solid aqua" }} >Courses</a>
          </div>
          <div>
            <TabsContent tab={tab}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About