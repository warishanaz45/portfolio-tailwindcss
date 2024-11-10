import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'> Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>I have a solid foundation in Web development , specializing in HTML , CSS and JavaScript. My experience extends to using framework like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design with a passion for learning , I stay updated on the latest technologies to enhance my skill set and contribute effectively to project </p>
        </div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">HTML</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
           <h2 data-aos="zoom-in-up">TYPESCRIPT</h2>
          </div>
          <div className='space-y-2'>
         <h2 data-aos="zoom-in-up">Tailwind</h2>
         <h2 data-aos="zoom-in-up">REACT.JS</h2>
         <h2 data-aos="zoom-in-up">NEXT.JS</h2>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
