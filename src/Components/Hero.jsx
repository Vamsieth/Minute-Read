import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (

    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
        <h1 className="text-2xl font-bold">Minute <span className="orange_gradient">Read</span></h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/vamsieth", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      {/* <h1 className="font-bold text-4xl">
        Summarize Articles with <br className="max-md:hidden"/> <span className="orange_gradient">OpenAI GPT 4</span>
      </h1> */}

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">Simplify your reading with Minute read, an open-source article summarizer
        that transforms lengthy articles into small paras which can be read in a minute or 2</h2>
    </header>
  )
}

export default Hero