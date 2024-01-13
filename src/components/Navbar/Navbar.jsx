import React, { useRef, useState } from 'react'
import style from './Navbar.module.css'
import letterT from '../../assets/images/userAssets/letterT.png'
import letterB from '../../assets/images/userAssets/letterB.png'
import { Link } from 'react-scroll'
import { FiArrowUp, FiMenu, FiX } from "react-icons/fi";
import useOnClickOutside from '../../hooks/useOnClickOutside'
import useScrollVisibility from '../../hooks/useScrollVisibilty'
import useRemoveBodyScrolling from '../../hooks/useRemoveBodyScrolling'

const Navbar = () => {
    const [showOverLay, setShowOverLay] = useState(false)
    const clickOutsideRef = useRef();
    useOnClickOutside(clickOutsideRef, () => setShowOverLay(false));


    const isVisible = useScrollVisibility();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    useRemoveBodyScrolling(showOverLay);
    

    return (
        <div className={style.Navbar}>
            <div className={style.Name}>
                <div>
                    <img src={letterT} alt='T' />
                    <p>arun</p>
                </div>
                <div>
                    <img src={letterB} alt='B' />
                    <p>hadauria</p>
                </div>
            </div>
            <div className={style.Nav}>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                <Link to="techStack" smooth={true} duration={500}>
                    Skills
                </Link>
                <Link to="contactUs" smooth={true} duration={500}>
                    Contact me
                </Link>
            </div>
            <div className={style.NavOverlay} ref={clickOutsideRef}>
                {
                    <div style={{ right: showOverLay ? '0px' : '-250px' }}>
                        <div onClick={() => setShowOverLay(false)} >
                            <FiX />
                            <p>Close</p>
                        </div>
                        <Link to="projects" smooth={true} duration={500} onClick={() => setShowOverLay(false)}>
                            Projects
                        </Link>
                        <Link to="techStack" smooth={true} duration={500} onClick={() => setShowOverLay(false)}>
                            Skills
                        </Link>
                        <Link to="contactUs" smooth={true} duration={500} onClick={() => setShowOverLay(false)}>
                            Contact me
                        </Link>
                    </div>
                }
                <FiMenu onClick={() => setShowOverLay(true)} style={{ cursor: 'pointer', display: showOverLay ? 'none' : 'block' }} />
            </div>
            <div onClick={scrollToTop} className={style.arrow} style={{ display: isVisible ? 'flex' : 'none' }}>
                <FiArrowUp />
            </div>
        </div>
    )
}

export default Navbar