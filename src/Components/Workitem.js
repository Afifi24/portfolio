import React from 'react'
import WorkData from './WorkData'
import Worksubitem from './worksubitem'
export default function Workitem({item}) {
  return (
    <div>
      <div className="work">
        <div className="text-work">
           <h2>{item.title}</h2>
           <p>{item.date}
            <br />
            <br />
           {item.description}
           </p>
           <div className="web-icons">
           <a href={item.github} target='blank'>
            <i className="fab fa-github" aria-hidden="true"></i>
            </a>
           <a href={item.web} target='blank'>
           <i className="fa-solid fa-globe"></i>
            </a>

           </div>
           <div className="language">
           {item.languages.map((subitem)=>(
                <Worksubitem subitem= {subitem}/>
            ))}
           </div>
        </div>
        <div className="image-work">
           <img src={`../images/${item.image}`} alt="" />
        </div>
      </div>
    </div>
  )
}
