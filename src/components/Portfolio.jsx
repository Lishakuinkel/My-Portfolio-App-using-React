import React from 'react';
import pizzaexpress from '../assets/pizzaexpress.jpeg';
import jate from '../assets/jate.png';
import weather from '../assets/weather.webp'

const Portfolio = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded full' src={pizzaexpress} alt="pizzaexpress" />
                <h2 className='font-bold text-2xl py-6'>Pizza Express</h2>
                <p className='text-1xl font-thin'>Full stack app built with Node.js, Express.js, TailwindCSS, MySQL2, Express-handlebars, Express-session</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://nameless-river-58365-d5c2867a5c56.herokuapp.com/">Click to view..</a>
            </div>
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col md:my-0 my-9 rounded-lg hover:scale-110 duration-300 p-4'>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={jate} alt="J.A.T.E" />
                <h2 className='font-bold text-2xl py-6'>J.A.T.E</h2>
                <p className='text-1xl font-thin'>Progressive Web app built with Node.js, Express.js, Webpack+Workbox, Babel, Mini-CSS-Extract Plugin</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://intense-plains-37109-c1307c5185c1.herokuapp.com/">Click to view..</a>
            </div>
            
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col md:my-0 my-4 rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={weather} alt="weather dashboard" />
                <h2 className='font-bold text-2xl py-6'>Weather Dashboard</h2>
                <p className='text-1xl font-thin'>Front end app built with HTML, CSS, JS, Bootstrap and Third party APIs(OpenWeather, GeoCoding)</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://lishakuinkel.github.io/Weather-Dashboard/">Click to view..</a>
            </div>
              
        </div>
    </div>  
  )
}

export default Portfolio