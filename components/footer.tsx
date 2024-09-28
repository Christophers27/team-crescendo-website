import React from 'react'
import { AiOutlineCopyright, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex flex-col bg-[#0c101f] text-white pt-16 pb-4 justify-center items-center'>
        <div className='flex'>
            <a className='' href="https://www.youtube.com/" target='_blank'>
                <AiOutlineTwitter className='text-4xl h-full mr-1' />
            </a>
            <a className='' href="https://www.youtube.com/" target='_blank'>
                <AiOutlineInstagram className='text-4xl h-full mr-1' />
            </a>
            <a className='' href="https://www.youtube.com/" target='_blank'>
                <AiFillYoutube className='text-4xl h-full mr-1' />
            </a>
        </div>
        <div className='mb-8 hover:underline hover:underline-offset-4'>
            <a href="mailto:christophersetiabudi@gmail.com" className='font-thin text-xl'>
                Email Us!
            </a>
        </div>
        <div className='flex items-center justify-center font-thin'>
            <AiOutlineCopyright className='text-xl h-full mr-1' /> <p className='text-xl'>2024 Team Crescendo LLC</p>
        </div>
    </div>
  )
}
