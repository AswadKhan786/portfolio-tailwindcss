import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
    {
        id:0,
        title: "Netflix Clone",
        img: "/a3.png",
        tags: ["Html", "CSS", "Typescript"],
    },
    {
        id:1,
        title: "Static Resume",
        img: "/a1.png",
        tags: ["Html", "CSS", "Typescript"],
    },
    {
        id:2,
        title: "Todo List",
        img: "/a5.jpg",
        tags: ["Html", "CSS", "Typescript"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-100 xl:gap-10 xl:gap-y-100 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
