import styles from '../styles/Navlogo.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function Navlogo() {
    let el = useRef(null);
    const logo = "<Hasan Slater />";
    let logo_styles = `${styles.logo}`;
    let logo_classes = "text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text"
    let total_styles = `${logo_styles} ${logo_classes}`;
    console.log(el.current);
    
    useEffect(
        () => {
            let flag = 1;
            el.current.textContent == "|";
            const interval =   setInterval(
                () => {
                    if (el.current == null) {
                        return;
                    }
                    else if (flag === 1) {
                        
                        el.current.style.visibility = "hidden";
                        flag = 0;
                    }
                    else if (flag === 0) {
                        el.current.style.visibility = "visible";
                        flag = 1;
                    }
                },500
            );
            return () => clearInterval(interval);
        }, []
    );
    
  
    
    return (
        <Link href="/">
            <div className={total_styles}>{logo}
            <span ref={el}>|</span>
            </div>
        </Link>
    )
}

export default Navlogo
