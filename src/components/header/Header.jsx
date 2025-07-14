import CTA from './CTA';
import Socials from './Socials';
import me from '../../assets/Frank_Shan_Profile.png';
import './header.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const fullName = "Frank Shan";
    const [displayedName, setDisplayedName] = useState("");

    // runs when component mounts
    useEffect(() => {
        setDisplayedName("");
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullName.length) {
                // use slive instead of updater to avoid state out of sync
                setDisplayedName(fullName.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);
        return () => clearInterval(typingInterval);
    }, []);

    return (
    <header id="home">
        <div className="text-center header_container">
            <h5 className="text-sky-200">Hi, I'm</h5>
            <h1 className="text-white">{displayedName}</h1>
            <div className="text-sky-200">
                <h5>Computer Science Undergraduate</h5>
                <h5>University of Waterloo</h5>
            </div>     
            <CTA/>
            <Socials/>
            <motion.div 
                className="profilepic"
                initial={{ y: 100, opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <img src={me} alt="Frank Shan Profile Photo"/>
            </motion.div>
            
        </div>
    </header>
  );
};

export default Header;
