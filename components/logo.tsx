"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Logo() {
    return (
        <div className='flex flex-col items-center'>
            <motion.div
                className="flex flex-initial items-center justify-center relative w-[100px] h-[100px]"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
                <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
            </motion.div>
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
                Team Crescendo
            </motion.h1>
        </div>
    )
}
