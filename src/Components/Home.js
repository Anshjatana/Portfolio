import React from 'react'
import ProfileImg from "../assets/Profile.png"

const Home = () => {
  return (
    <div className='h-[600px]' >
    <div className='text-white w-[45%] absolute top-[200px] left-[130px]'>
        <h1 className='text-[40px] font-semibold text-[#ff0044] ' >
            Hello!
        </h1>
        <h2 className='text-[35px] font-bold  '>
            I'm Ansh Jatana
        </h2>
        <h3 className='text-[25px] text-[paleturquoise] '>
            A Frontend developer
        </h3>
        <p className='text-[15px] my-4 text-[lightgray]'>
        I possess a robust grasp of HTML, CSS, JavaScript, and React.js. My proficiency lies in crafting captivating, user-centric websites. Eager for challenges and collaborative work with fellow professionals.
        </p>
    </div>
      <div className='relative top-[200px] float-right right-[180px]  '>
      <img src={ProfileImg} alt='Profile img' className='w-[300px] rounded-lg z-9'/>
      </div>
    </div>
  )
}

export default Home
