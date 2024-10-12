import React from 'react'
import { motion } from 'framer-motion'
import MemberCard from '../memberCard'

const members = [
  {name: "Hank", role: "Project: Noire Lead & Engineer", image: "/defaultProfile.png"},
  {name: "Daniel", role: "Technical Director", image: "/defaultProfile.png"},
  {name: "Cole", role: "Creative Director & Production", image: "/defaultProfile.png"},
  {name: "Emma", role: "2D Artist & Visual Designer", image: "/defaultProfile.png"},
  {name: "Chris", role: "Story & Worldbuilding", image: "/defaultProfile.png"},
  {name: "Jingxuan", role: "Engineer", image: "/defaultProfile.png"},
  {name: "Xiao", role: "Engineer", image: "/defaultProfile.png"},
  {name: "Mark", role: "Composer", image: "/defaultProfile.png"},
  {name: "Leo", role: "Composer", image: "/defaultProfile.png"},
  {name: "Miguel", role: "Marketing & Production", image: "/defaultProfile.png"},
].sort((a, b) => a.name.localeCompare(b.name))

export default function Members() {
  return (
    <motion.section className='flex flex-col items-center section text-white'>
      <h2 className='text-4xl font-bold'>Meet the Team</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {members.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </motion.section>
  )
}
