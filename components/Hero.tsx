import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Ziyi Li",
            "Guy-who-loves-coffee.tsx",
            "<AlsoLovesCoding />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
        </div>
    )
}

export default Hero