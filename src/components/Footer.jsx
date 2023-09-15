import React from 'react'
import {
  FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#5a6d78] w-full mx-auto py-10 px-4 grid lg:grid-cols-3 gap-4 text-gray-300 text-center'>
      <p> ©2023  Lisha Kuinkel</p>
      <div className='flex justify-between mx-auto w-[75%] py-4'>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaGithubSquare size={30} />
        <FaTwitterSquare size={30} />
      </div>
    </div>
  )
}

export default Footer