import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='flex justify-between md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
            <p className='text-gray-500 pt-2 flex justify-between'>I have a solid foundation in web development, specializing in HTMl,CSS and Javascript. MY experience extends to using Frameworks like React and Next.js to create Dynamic and user-friendly application. I'm also complemet in Tailwind CSS for efficient styling and design. with a passion for learing, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
