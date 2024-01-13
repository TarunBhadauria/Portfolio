import React from 'react'
import style from './HeroSection.module.css'
import AboutMe from './AboutMe'
import Image from './Image'

const HeroSection = () => {
    return (
        <div className={style.HeroSection}>
            <div>
                <AboutMe/>
                <Image/>
            </div>
            <p>Tarun</p>
        </div>
    )
}

export default HeroSection