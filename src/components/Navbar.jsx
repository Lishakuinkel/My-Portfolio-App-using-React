import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';



const Navbar = ({handlePageChange}) => {

  const [nav, setNav] = useState(false);

  //When menu is clicked, handleNav sets nav to opposite of it's current value
  const handleNav = () => {
    setNav(!nav); 
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5 text-[##f5f5dc]'>
        <h1 className='w-full text-3xl font-bold'></h1>
        <ul className='hidden md:flex  text-[#819ebb]'>
          <li className='p-4  hover:text-[#cfd9e3]'><a href="/#home" onClick={()=> handlePageChange('Home')}>Home</a></li>
          <li className='p-4  hover:text-[#cfd9e3]'><a href="#about" onClick={()=> handlePageChange('AboutMe')}>About</a></li>
          <li className='p-4  hover:text-[#cfd9e3]'><a href="#portfolio" onClick={()=> handlePageChange('Portfolio')}>Portfolio</a></li>
          <li className='p-4  hover:text-[#cfd9e3]'><a href="#contact" onClick={()=> handlePageChange('ContactMe')}>Contact</a></li>
          <li className='p-4  hover:text-[#cfd9e3]'><a href="Resume.pdf" download>Resume</a></li>
                   
        </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        
      </div>
      
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-white m-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
      
        <ul className='pt-14 uppercase'>
        
          <li className='p-4 border-b border-white-600'><a href="#about" onClick={()=> handlePageChange('AboutMe')}>About</a></li>
          <li className='p-4 border-b border-white-600' ><a href="#portfolio" onClick={()=> handlePageChange('Portfolio')}>Portfolio</a></li>
          <li className='p-4 border-b border-white-600'><a href="#contact" onClick={()=> handlePageChange('ContactMe')}>Contact</a></li>
          <li className='p-4 border-b border-white-600'><a href="Resume.pdf" download>Resume</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar