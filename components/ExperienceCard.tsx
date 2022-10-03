import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -200,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://user-images.githubusercontent.com/87960642/193581507-69eddd38-cec2-42f0-8cbb-0243e0e9ff54.png"
            alt="" 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Southwest Jiaotong University - University of Leeds</h4>
            <p className='font-bold text-2xl mt-1'>Bsc Computer Science</p>
            {/* <div className='flex space-x-2 my-2'>
                <img 
                    className='h-10 w-10 rounded-full'
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Funiversityleeds&psig=AOvVaw37XZyY4LGN3A0cHJSnJ68y&ust=1664871395988000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDju7LPw_oCFQAAAAAdAAAAABAE" 
                    alt=""
                />
            </div> */}
            <p className='uppercase py-5 text-gray-300'>started ... - expect to graduate...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Procedural Programming</li>
                <li>Introduction to web technologies</li>
                <li>Computer Architecture</li>
                <li>Introduction to Programming</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard