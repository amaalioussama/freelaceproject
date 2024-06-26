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
    <div className="bg-gradient-to-t from-costumperpel  to-costumegray sm:h-[35rem]  sm:mt-0 ">
     <div className="flex justify-center items-center w-full h-screen">
  <div className="flex flex-col justify-center items-center w-[1000px] h-[200px]">
    <div className="inline-flex sm:text-2xl text-xl font-mono py-1 px-3 m-2 text-white uppercase mb-12 text-center">
      Fill out the form and contact our expert
    </div>
    <form ref={form} onSubmit={sendEmail} className="sm:grid sm:grid-cols-2 sm:gap-4 flex-wrap justify-center items-center">
      <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
        <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px] ">
          <input
            className="bg-[#ffffff] w-full h-full sm:pl-4"
            type="text"
            placeholder="NAME"
            name="name"
          />
        </div>
      </div>
      <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px] sm:mt-0 mt-4">
        <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
          <input
            className="bg-[#ffffff] w-full h-full sm:pl-4"
            type="text"
            placeholder="PHONE"
            name="phone"
          />
        </div>
      </div>
      <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px] sm:mt-0 mt-4">
        <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
          <input
            className="bg-[#ffffff] w-full h-full sm:pl-4"
            type="email"
            placeholder="E-MAIL"
            name="email"
          />
        </div>
      </div>
      <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px] sm:mt-0 mt-4 ">
        <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
          <input
            className="bg-[#ffffff] w-full h-full sm:pl-4 "
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
        className="relative col-span-2 mt-9 border-2 border-white w-44 h-10 sm:h-16 sm:w-56 sm:ml-64 ml-24"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#281e53"
          }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center text-center bg-mediumBlue w-full h-full"
          type="submit"
        >
          <h2 className="text-white font-outfitregular sm:text-2xl text-base uppercase">Submit</h2>
        </motion.button>
      </motion.div>
    </form>
  </div>
</div>

    </div>
  );
};

export default Contact;

