'use client'
import Image from "next/image";

import { motion } from "framer-motion"
import React from 'react';
import Link from "next/link";

export default function Herocomponent() {

  const wordsligne1 = [

    "C","O","M","M","O","H","E","D","G","E" ]
 

    const wordsligne5 = [
      "\u00A0","\u00A0", "T", "r", "u", "s", "t", "e", "d", " ", "b", "y", " ", "t", "h", "o", "u", "s", "a", "n", "d", "s", " ", "o", "f", " ",
      "c", "o", "r", "p", "o", "r", "a", "t", "i", "o", "n", "s", " ", "a", "c", "r", "o", "s", "s", " ", "a", "l", "l", " ",
      "c", "o", "m", "m", "o", "d", "i", "t", "y", " ", "t", "y", "p", "e", "s", " ", "a", "n", "d", " ", "\n", "i", "n", "d", "u", "s", "t", "r", "i", "e", "s", " ",
      "f", "o", "r", " ", "p", "e", "e", "r", "l", "e", "s", "s", " ", "c", "o", "m", "m", "o", "d", "i", "t", "y", " ", "a", "n", "d", " ",
      "t", "r", "a", "d", "i", "n", "g", " ", "r", "i", "s", "k", " ", "m", "a", "n", "a", "g", "e", "m", "e", "n", "t", " ", "s", "o", "l", "u", "t", "i", "o", "n", "s", "."
    ];
    

  return <div className="flex justify-center items-center    bg-bgbg bg-cover"  style={{height : "568px"}}>

<div id="cc" className="flex flex-grow  justify-center items-center">
<div className="-mt-12 ">
<div className="ml-44">
      
 
{wordsligne1.map((word, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                className="text-white text-6xl font-outfitregular uppercase"
            >
                {word}
            </motion.span>
            
        ))}       
    </div>
  
    <div className="mt-10">
    <div>
    {wordsligne5.map((character, index) => (
            character === "\n" ? (
              <br key={index} />
            ) : (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.02, delay: (index * 0.008) + 0.01 }}
                className="text-xl font-mono text-white"
              >
                {character}
              </motion.span>
            )
          ))}
        </div>
    </div>
 <div> 

 <motion.div 
  initial={{ y:-35 , opacity:0 }}
  animate={{ y: 20 ,opacity : 1 }}
  transition={{ duration:3, delay: 0.1 }}
 
 className=" relative ml-52 mt-9 border-2  border-white h-16 w-96">
 <motion.button
        whileHover={{
          scale: 1.1,
          
          backgroundColor: "#281e53"
        }}
        transition={{ duration: 0.5}}
      className=" flex justify-center items-center text-center       bg-mediumBlue  h-16 w-96 ">
   
    <h2 className="text-white font-outfitregular text-2xl uppercase">
      
     <Link href='/signin'> Get Started </Link> </h2> 
   

</motion.button>
</motion.div>
 </div>

</div>

</div>



  </div>;
}
