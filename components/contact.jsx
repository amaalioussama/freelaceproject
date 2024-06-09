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
    <div className="bg-gradient-to-t from-costumperpel to-costumegray h-[23rem]">
      <div className="ml-64 justify-center items-center w-[1000px] h-[200px]">
        <div className="inline-flex text-2xl font-mono py-1 px-3 m-2 text-white uppercase mb-12 text-center ml-36">
          Fill out the form and contact our expert
        </div>
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="NAME"
               name="name"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="PHONE"
              name="phone"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="email"
                placeholder="E-MAIL"
               name="email"
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#ffffff] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
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
            className="relative col-span-2 ml-[330px] mt-9 border-2 border-white h-16 w-56"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#281e53"
              }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-center bg-mediumBlue h-16 w-56"
              type="submit"
            >
              <h2 className="text-white font-outfitregular text-2xl uppercase">Submit</h2>
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

