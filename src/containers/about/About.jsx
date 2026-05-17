import './About.css';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  useGLTF
} from '@react-three/drei';
import logo from '../../assets/amrita-logo.png';
import {
  FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaPython, FaGitAlt, FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript, SiSass, SiTailwindcss, SiBootstrap,
  SiFlask, SiDjango, SiExpress,
  SiCplusplus, SiC,
  SiPostman, SiPostgresql, SiMysql, SiMongodb,
  SiTensorflow, SiPytorch, SiNumpy,
} from "react-icons/si";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { icon: <FaHtml5 />,       label: "HTML5",      color: "#e34f26" },
      { icon: <FaCss3Alt />,     label: "CSS3",       color: "#264de4" },
      { icon: <SiJavascript />,  label: "JavaScript", color: "#f7df1e" },
      { icon: <FaReact />,       label: "React",      color: "#61dafb" },
      { icon: <SiSass />,        label: "Sass",       color: "#cc6699" },
      { icon: <SiTailwindcss />, label: "Tailwind",   color: "#38bdf8" },
      { icon: <SiBootstrap />,   label: "Bootstrap",  color: "#7952b3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { icon: <SiFlask />,   label: "Flask",   color: "#ffffff" },
      { icon: <SiDjango />,  label: "Django",  color: "#44b78b" },
      { icon: <SiExpress />, label: "Express", color: "#c8c8c8" },
      { icon: <FaNodeJs />,  label: "Node.js", color: "#3c873a" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { icon: <FaPython />,    label: "Python", color: "#3776ab" },
      { icon: <SiCplusplus />, label: "C++",    color: "#6295cb" },
      { icon: <SiC />,         label: "C",      color: "#a8b9cc" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { icon: <FaGitAlt />,  label: "Git",     color: "#f05032" },
      { icon: <FaGithub />,  label: "GitHub",  color: "#ffffff" },
      { icon: <SiPostman />, label: "Postman", color: "#ff6c37" },
      { icon: <VscVscode />, label: "VS Code", color: "#007acc" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiMysql />,      label: "MySQL",      color: "#4479a1" },
      { icon: <SiMongodb />,    label: "MongoDB",    color: "#4db33d" },
    ],
  },
  {
    category: "ML & AI",
    skills: [
      { icon: <SiTensorflow />, label: "TensorFlow", color: "#ff6f00" },
      { icon: <SiPytorch />,    label: "PyTorch",    color: "#ee4c2c" },
      { icon: <SiNumpy />,      label: "NumPy",      color: "#4dabcf" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0 },
};

const iconStagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show:   { opacity: 1, scale: 1,   y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 18 } },
};

const SkillIcon = ({ icon, label, color }) => (
  <motion.div
    className="skill-icon"
    title={label}
    aria-label={label}
    style={{ '--icon-color': color }}
    variants={iconVariant}
    whileHover={{ y: -5, scale: 1.18,
      transition: { type: 'spring', stiffness: 380, damping: 16 } }}
  >
    {icon}
  </motion.div>
);

const CategoryCard = ({ section, index }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="category-section"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4,
        transition: { type: 'spring', stiffness: 260, damping: 20 } }}
    >
      <p className="title">{section.category}</p>
      <motion.div
        className="skills-grid"
        variants={iconStagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {section.skills.map((skill, i) => (
          <SkillIcon key={i} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const model = useGLTF('/bmw.glb');

  const headerRef = useRef(null);
  const modelRef  = useRef(null);
  const eduRef    = useRef(null);
  const skillRef  = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const modelInView  = useInView(modelRef,  { once: true });
  const eduInView    = useInView(eduRef,    { once: true });
  const skillInView  = useInView(skillRef,  { once: true });

  return (
    <div className="about" id="about">

      <motion.div
        ref={headerRef}
        className="about-header"
        initial="hidden"
        animate={headerInView ? 'show' : 'hidden'}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p
          className="about-title"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          About&nbsp;<span className="highlight">Me</span>
        </motion.p>
      </motion.div>

      <div className="about-container">
        <div className="model-container">
          <motion.div
            ref={modelRef}
            className="model-frame"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={modelInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="model-wrapper">
              <Canvas camera={{ position: [0, 0.3, 5.5], fov: 30 }}>
                <ambientLight intensity={1.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.8} />
                <Environment preset="city" />
                <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.35}>
                  <primitive
                    object={model.scene}
                    scale={0.95}
                    position={[0, -0.75, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                  />
                </Float>
                <ContactShadows
                  position={[0, -1.0, 0]}
                  opacity={0.3}
                  scale={7}
                  blur={2.5}
                />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1.2}
                />
              </Canvas>
            </div>
          </motion.div>
        </div>

        <div className="about-content">
          <motion.div
            ref={eduRef}
            className="education"
            initial={{ opacity: 0, x: 30 }}
            animate={eduInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3,
              transition: { type: 'spring', stiffness: 260, damping: 20 } }}
          >
            <div className="edu-logo-wrap">
              <img src={logo} alt="Amrita logo" />
            </div>
            <div className="education-content">
              <span className="edu-tag">Education</span>
              <p className="education-description">
                B.Tech — Computer Science &amp; Engineering (AI)
              </p>
              <p className="education-institute">
                Amrita Vishwa Vidyapeetham, Coimbatore
              </p>
              <p className="education-year">2024 – 2028</p>
            </div>
          </motion.div>

          <motion.div
            ref={skillRef}
            className="skills-section"
            initial={{ opacity: 0, x: 30 }}
            animate={skillInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skills-header">
              <h2 className="main-title">Skills</h2>
            </div>

            <div className="skills-categories">
              {skillData.map((section, i) => (
                <CategoryCard key={i} section={section} index={i} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;