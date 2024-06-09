'use client'
import Image from 'next/image'

import FeatImage01 from '../public/images/features-03-image-01.png'
import FeatImage02 from '../public/images/features-03-image-02.png'
import FeatImage03 from '../public/images/features-03-image-03.png'
import casa from '../public/images/casa.png'
import  ft from '../public/images/ft.jpeg'
import paris from '../public/images/paris.jpg'
import dubai from '../public/images/dubai.jpg'
import React, { useState } from 'react';

export default function Zigzag() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const definitions = [
    {
      title: 'Price risks',
      description: ' These arise as a result of adverse movement in the prices of commodities that are determined by macroeconomic factors.',
    },
    {
      title: 'Quantity Risk',
      description: ' Quantity risks arise due to changes in the availability of commodities.',
    },
    {
      title: 'Cost risk',
      description: ' Costs risks are a result of an increase in the costs of commodities.',
    },
  ];
  const definitions1 = [
    {
      title: 'Regulatory risk',
      description: ' When laws and regulations have the potential to impact on the prices or availability of commodities, then there is a regulatory risk.',
    }
  ];
  return (
    <section className='bg-gradient-to-t from-costumperpel to-costumegray '>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-2xl font-mono py-1 px-3 m-2 text-white uppercase  mb-2">Digital transformation for the commodities industry</div>

            <p className='inline-flex text-lg font-mono py-1 px-3  text-white uppercase '>
              Navigate market volatility and operational complexity with our tools/solutions, designed to support your organization’s needs.
             We offer a suite of comprehensive commodities trading, risk management, 
            and advanced decision support solutions to empower businesses of all sizes across all industries, commodities,
             and regions. CommoHedge is a long-term partner on your digital transformation journey.</p>
              <p className="text-4xl text-gray-200 mt-3  uppercase">Best Solution in Africa & MENA Region </p>
          </div>
          <div className='flex justify-around items-center'>
            <div>
            <p className=' text-white text-3xl font-mono uppercase text-center mb-3 '>Europe</p>
              <p className=' text-white text-2xl font-mono uppercase text-center mb-3 '>France</p>
              <Image src={paris} alt='ha' className=' h-[300px] w-[320px] rounded-xl'/>
              <p className='   font-mono uppercase ml-2 mt-3 text-gray-400 text-center '>la place financière de Paris</p>
            </div>
            <div>
            <p className=' text-white text-3xl font-mono uppercase  text-center  mb-3 '>North Africa </p>
              <p className=' text-white text-2xl font-mono uppercase  text-center  mb-3 '>Maroc</p>
              <Image src={casa} alt='ha' className=' h-[300px] w-[320px]  rounded-xl'/>
              <p className=' text-gray-400 font-mono uppercase text-center  mt-3 '>Casablanca Finance City  </p>
            </div>
            <div className='mt-7'>
            <p className=' text-white text-3xl font-mono uppercase text-center mb-3 '>Middle East </p>
              <p className=' text-white text-2xl font-mono uppercase text-center mb-3 '>dubai </p>
              <Image src={dubai} alt='ha' className=' h-[300px] w-[320px]  rounded-xl'/>
              <p className=' text-gray-400 font-mono uppercase text-center mt-3 '>Dubai International Financial </p>
              <p className=' text-gray-400 font-mono uppercase text-center  mt-3 '>Center </p>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-20 mt-12">

           
           

            {/* 2nd item */}
           
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ft} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 " data-aos="fade-up">
  <div  id="is" className="mt-8  ">
  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-4xl font-mono py-1 px-3 m-2 text-white uppercase  mb-2">What Are Commodity Risks</div>

            <p className='inline-flex text-lg font-mono py-1 px-3  text-white uppercase '>
            The volatile nature of commodity pricing makes commodity risks a crucial element in commodity trading.
             The market forces of demand and supply cause huge price fluctuations that can adversely affect the
             commodity market. Especially as these markets have become more complex by the day.</p>
       
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-4xl font-mono py-1 px-3 m-2 text-white uppercase  mb-2">What are the types of Risk?</div>

            <p className='inline-flex text-lg font-mono py-1 px-3  text-white uppercase '>
            Commodity traders are likely to be exposed to any of, or a combination of the following commodity risks</p>
       
          </div>
 
    <div className="flex ml-[365px]">
      {definitions1.map((definition, index) => (
        <div
          key={index}
          className={`border-4 border-l-2 border-r-2 border-b-0 text-white font-mono text-xl text-center h-28 w-[370px] ${
            index === 0 ? 'border-l-' : ''
          } ${index === definitions1.length - 1 ? 'border-r-1' : ''} ${
            index === hoveredIndex ? 'bg-mediumBlue' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          {index !== hoveredIndex ? (
            <h1 className="text-center mt-9 uppercase duration-600">
              {definition.title}
            </h1>
          ) : (
            <div className="p-4 text-white font-mono text-sm text-center">
              {definition.description}
            </div>
          )}
        </div>
      ))}
    </div>



    <div className="flex">
      {definitions.map((definition, index) => (
        <div
          key={index}
          className={`border-4 border-l-2 border-r-2 text-white font-mono text-xl text-center h-28 w-[390px] ${
            index === 0 ? 'border-l- ' : ''
          } ${index === definitions.length - 1 ? 'border-r-1' : ''} ${
            index === hoveredIndex ? 'bg-mediumBlue' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          {index !== hoveredIndex ? (
            <h1 className="text-center mt-9 uppercase duration-600">
              {definition.title}
            </h1>
          ) : (
            <div className="p-4 text-white font-mono text-sm text-center">{definition.description}</div>
          )}
        </div>
      ))}
    </div>
   

</div>
</div>
        </div>
      </div>
    </section>
  )
}
