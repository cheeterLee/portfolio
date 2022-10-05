import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
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
                src={urlFor(experience?.schoolImage).url()}
                alt="" 
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience?.schoolTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience?.school}</p>
                {/* <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full'
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Funiversityleeds&psig=AOvVaw37XZyY4LGN3A0cHJSnJ68y&ust=1664871395988000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDju7LPw_oCFQAAAAAdAAAAABAE" 
                        alt=""
                    />
                </div> */}
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard