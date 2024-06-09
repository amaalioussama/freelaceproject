import Image from 'next/image'

import TestimonialImage01 from '../public/images/testimonial-01.jpg'
import TestimonialImage02 from '../public/images/testimonial-02.jpg'
import TestimonialImage03 from '../public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section className='bg-gradient-to-t from-costumegray to-costumperpel'>
     <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-3xl text-white font-mono uppercase mb-4">Which Sectors are More Exposed to Commodities Risk?</h2>
            <ul className="text-lg text-gray-400 -mb-2 ml-48">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mining and Minerals sector like Gold, steel, coal</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>The agricultural sector like wheat, cotton, sugar</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Energy sectors like Oil, Gas, Electricity</span>
                    </li>
                  </ul>
         </div>
             
                </div>
              </div>
         
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-3xl text-white font-mono uppercase mb-4">our client review</h2>
          </div>
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" /> */}
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">The consultation I received from the platform was nothing short of exceptional. As a newcomer to the commodities market, I was overwhelmed by the complexities. The expert guidance I received helped me understand market trends and make informed investment decisions. The team was incredibly knowledgeable and always available to answer my questions. Highly recommended for anyone looking to navigate the nuances of the commodities market</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">⭐⭐⭐⭐⭐</cite> - <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Omar A</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" /> */}
                 
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">I can't say enough good things about this consultation platform. As someone with minimal experience in the commodities market, I found their insights invaluable. The consultants broke down complex concepts into easily understandable terms, and their market forecasts have been spot on. Their support has been crucial in helping me develop a successful investment strategy. Whether you're a beginner or an experienced trader, this platform is a game-changer.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">⭐⭐⭐⭐⭐</cite> - <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Layla H</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" /> */}
                
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Absolutely stellar service! The consultation provided a deep dive into the nuances of the commodities market, which was exactly what I needed. Their strategic advice and market analysis were top-notch and helped me avoid potential pitfalls. The team's dedication to my success was evident in every interaction. For anyone serious about commodities trading, this platform is a must-try.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">⭐⭐⭐⭐⭐</cite> - <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Ahmed S</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
