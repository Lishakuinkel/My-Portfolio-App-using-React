import React from 'react'
import {
  FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#5a6d78] w-full mx-auto py-1 px-2 grid lg:grid-cols-3 gap-4 text-gray-300 text-center'>
      <p> ©2023  Lisha Kuinkel</p>
      <div>
        <ul className='flex justify-between mx-auto w-[75%] py-4'>
          <li><a href="https://www.facebook.com/"><FaFacebookSquare size={30} /></a></li>
          <li><a href="https://www.instagram.com/"><FaInstagram size={30} /></a></li>
          <li><a href="https://github.com/Lishakuinkel"><FaGithubSquare size={30} /></a></li>
          <li><a href="https://twitter.com/"><FaTwitterSquare size={30} /></a></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer