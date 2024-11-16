"use client";

import React, { useState } from 'react'
import { motion } from 'motion/react'

interface GameCardProps {
    profileImage: string;
    bannerImage: string;
    title: string;
    description: string;
}

export default function GameCard({ profileImage, bannerImage, title, description }: GameCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div layout onClick={() => setIsExpanded(!isExpanded)} className={`flex bg-neutral-950 rounded-lg border-2 border-neutral-800 p-4 md:p-8 gap-4 ${isExpanded ? 'fixed top-[4%] left-[4%] w-[92%] h-[92%] z-50' : 'w-auto h-auto'}`}>
            <motion.img layout='position' src={profileImage} alt={title} className='w-24 h-24 rounded-md' />
            <motion.div layout>
                <motion.h1 layout="position" className='font-semibold text-lg mb-2'>{title}</motion.h1>
                <motion.p layout='position' className='font-light line-clamp-2'>{description}</motion.p>
            </motion.div>
        </motion.div>
    )
}
