'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qkdxu3q', 'template_8ia0tn4', form.current, {
        publicKey: '7t3U8unA2yiY_1_h5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="bg-gradient-to-t from-costumperpel  to-costumegray sm:h-[23rem] h-[30rem] overflow-auto">
      <div className="ml-64 justify-center items-center w-[1000px] h-[200px]">
        <div className="inline-flex sm:text-2xl text-xl  font-mono py-1 px-3 m-2 text-white uppercase mb-12 text-center sm:ml-36 -ml-56">
          Fill out the form and contact our expert
        </div>
      <form ref={form} onSubmit={sendEmail} className="sm:grid sm:grid-cols-2 sm:gap-4 flex-nowrap justify-center items-center sm:ml-32 ml-10 ">
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px] ">
            <div className="bg-mediumBlue sm:w-96 sm:h-12 sm:-translate-x-[3px] sm:-translate-y-[3px] ">
              <input
                className="bg-[#ffffff] sm:w-96 sm:h-12 w-56 h-12 -ml-[9rem] mt-[27px]   sm:-translate-x-[1px] sm:-translate-y-[0px] sm:pl-4"
                type="text"
                placeholder="NAME"
               name="name"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] sm:w-96 sm:h-12 w-56 h-12 -ml-[8.8rem] mt-[35px]  sm:-translate-x-[3px] sm:-translate-y-[3px] sm:pl-4"
                type="text"
                placeholder="    PHONE"
              name="phone"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] sm:w-96 sm:h-12 w-56 h-12 -ml-[8.8rem]  mt-[40px]  sm:-translate-y-[3px] sm:pl-4"
                type="email"
                placeholder="    E-MAIL"
               name="email"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] sm:w-96 sm:h-12 w-56 h-12 -ml-[8.8rem] mt-[45px]  sm:-translate-x-[3px] sm:-translate-y-[3px] pl-4"
                type="text"
                placeholder="LOCATION"
              name="location"
              />
            </div>
          </div>
          <motion.div 
            initial={{ y: -35, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ duration: 3, delay: 0.1 }}
            className="relative col-span-2 sm:ml-[150px] -ml-32 mt-9 border-2 border-white  w-44 h-10 sm:h-16 sm:w-56"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#281e53"
              }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-center bg-mediumBlue w-44 h-10 sm:h-16 sm:w-56"
              type="submit"
            >
              <h2 className="text-white font-outfitregular sm:text-2xl text-base uppercase">Submit</h2>
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

