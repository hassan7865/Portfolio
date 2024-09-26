import React from 'react'
import { courses, tech } from '../../Tech'
import './TabContent.scss'
const TabsContent = ({tab}) => {
  return (
    <div className='Cont'>
      {tab === 1 &&<div className='Skills'>
        {tech.map((items) => (
          <div className='Icons'>
            <img width="40px" height="40px" src={items.icon}></img>
            <p>{items.name}</p>
          </div>
        ))}
      </div>}
      {tab === 2 &&<div className="Education">
        <p>Bachelors Of Sofware Engineering</p>
        <ul>
          <li>Department of Computer Science, Karachi University</li>
          <li>In progress, expected graduation in 2025</li>
        </ul>
        <p>Intermediate (Pre Engineering)</p>
        <ul>
          <li>Govt Science and Commerce College, Gulshan e Iqbal, Block 7, Karachi</li>
          <li>IGraduated in 2022</li>
        </ul>
        <p>Matriculation (Science)</p>
        <ul>
          <li>Apex Education House, Karachi</li>
          <li>Graduated in 2019</li>
        </ul>
      </div>}
      {tab === 3 &&<div className="Courses">
        {courses.map((items)=>(
                  <div className="Icons">
                    <img  src={items.icon}></img>
                    <div className='info'>
                    <p>{items.title}</p>
                    <p>{items.period}</p>
                    </div>
                    
                  </div>
        ))}

      </div>}
    </div>
  )
}

export default TabsContent