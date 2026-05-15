import './Hero.css';
import profilePic from '../../assets/profile-pic.png';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const text = "I'm a passionate developer specializing in MERN stack development, AI & ML, and frontend/backend development. I love creating innovative solutions and continuously learning new technologies.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero' id='home'>
      <div className="hero-content">
        <h1>
          Hi, I'm{" "}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            Subash
          </motion.span>
        </h1>
        <TypeAnimation
          sequence={[
            'MERN Stack Developer',
            2000,
            'AI & ML Enthusiast',
            2000,
            'Frontend Developer',
            2000,
            'Backend Developer',
            2000,
            'Freelancer',
            2000
          ]}
          speed={50}
          repeat={Infinity}
          className='hero-roles'
        />
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
        </motion.p>
        <div className="social-icons">
          <motion.a
            href="https://github.com/Next-Gen-Coder-2007"
            target="_blank"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/subash-baskaran/"
            target="_blank"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className="cta-buttons">
          {['View Projects', 'Contact Me'].map((text, index) => (
            <motion.a
              key={index}
              href={index === 0 ? "#projects" : "#contact"}
              className="cta-button"
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {text}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="hero-image">
        <motion.div className="image-bg"/>
        <motion.div className='achievements'>
          <motion.div 
            className='achievement'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          >
            <p>Continuously learning modern web technologies</p>
          </motion.div>
          <motion.div 
            className='achievement'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
          >            
          <p>Built multiple <span>React</span> & <span>MERN</span> projects</p>
          </motion.div>
          <motion.div 
            className='achievement'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 300 }}
          >
            <p>Solved <span>300+</span> problems on LeetCode</p>
          </motion.div>
        </motion.div>
        <motion.img 
          src={profilePic} 
          alt="Profile Photo" 
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.8, filter: 'blur(8px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default Hero