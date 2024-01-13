import React from 'react'
import style from './HeroSection.module.css'
import circle from '../../assets/images/userAssets/circle.png'
import cube from '../../assets/images/userAssets/cube.png'
import dots from '../../assets/images/userAssets/dots.png'
import plus from '../../assets/images/userAssets/plus.png'
import zigzag from '../../assets/images/userAssets/zigzags.png'


const user = "https://res.cloudinary.com/di1qrcflg/image/upload/v1704267418/userImage_jfynlq.jpg";

const Image = () => {
  return (
    <div className={style.Image}>
        <div>
            <img loading="lazy" src={user} alt='user'/>
        </div>
        <img loading="lazy" className={style.circle} src={circle} alt='circle'/>
        <img loading="lazy" className={style.cube} src={cube} alt='cube'/>
        <img loading="lazy" className={style.dots} src={dots} alt='dots'/>
        <img loading="lazy" className={style.plus} src={plus} alt='plus'/>
        <img loading="lazy" className={style.zigzag} src={zigzag} alt='zigzag'/>
    </div>
  )
}

export default Image