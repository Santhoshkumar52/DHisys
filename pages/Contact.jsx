import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../Context/ThemeContext'

const Contact = () => {
  const theme=useTheme()
  return (
    <div>
      <div className={clsx("lg:py-25 py-10 px-4 md:px-16 relative text-white", {
              "bg-[#7D0C1C]": theme === "themeMaroon",
              "bg-[#0A2240]": theme === "themeBlue",
            })}>
              {/* Services - Contact Form Left */}
              <div className="lg:w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-2 ">
                  <form action="" className='bg-white text-black py-12 px-6 rounded lg:absolute lg:w-[475px] -top-40 z-99 my-2'>
                    <div className="label-group">
                      <label htmlFor="name" className='font-semibold'>Your Name </label><span className='font-bold text-red-600'>*</span>
                      <input type="text" name="" id=""  className='border block w-full mt-3 mb-7 rounded border-neutral-400 outline-none p-1.5 '/>
                    </div>
                    <div className="label-group">
                      <label htmlFor="name" className='font-semibold'>Your Email </label><span className='font-bold text-red-600'>*</span>
                      <input type="text" name="" id=""  className='border block w-full mt-3 mb-7 rounded border-neutral-400 outline-none p-1.5 '/>
                    </div>
                    <div className="label-group">
                      <label htmlFor="name" className='font-semibold'>Service you are looking for </label><span className='font-bold text-red-600'>*</span>
                      <input type="text" name="" id=""  className='border block w-full mt-3 mb-7 rounded border-neutral-400 outline-none p-1.5 '/>
                    </div>
                    <div className="label-group">
                      <label htmlFor="name" className='font-semibold'>Service you are looking for </label><span className='font-bold text-red-600'>*</span>
                      <textarea name="" id="" className='border block w-full h-30 mt-3 mb-7 rounded border-neutral-400 outline-none p-1.5'></textarea>
                    </div>
                    <div className="label-group">
                      <button type="button" className='bg-[#0A2240] py-2 px-3 cursor-pointer hover:bg-[#253446] transition-colors text-white font-medium rounded'>Sumbit</button>
                    </div>
                  </form>
                
                {/* Services - Contact Us right */}
                <div className=" lg:w-[390px] lg:mx-30 my-10 lg:justify-self-end">
                  <h1 className='text-4xl text-center font-bold'>Contact Us</h1>
                  <div className='mt-14'>
                <div className="group_Address my-3">
                  <p className='text-xl mb-3 font'>Address</p>
                  <p className='text-sm mb-7'>12, 3rd Street City, XXXXXXX.</p>
                  <hr />
                </div>
                <div className="group_Phone my-3">
                  <p className='text-xl mb-3 font'>Phone</p>
                  <p className='text-sm mb-7'>+91 XXXXX XXXXX</p>
                  <hr />
                </div>
                <div className="group_Email my-3">
                  <p className='text-xl mb-3 font'>Email</p>
                  <p className='text-sm mb-7'>sample@gmail.com</p>
                </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contact