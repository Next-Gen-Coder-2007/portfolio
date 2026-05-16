import './About.css';

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
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiDjango,
  SiExpress,
  SiCplusplus,
  SiC,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
} from "react-icons/si";

const About = () => {
  const model = useGLTF('/bmw.glb');

  const skillData = [
    {
      category: "Frontend",
      skills: [
        { icon: <FaHtml5 /> },
        { icon: <FaCss3Alt /> },
        { icon: <SiJavascript /> },
        { icon: <FaReact /> },
        { icon: <SiSass /> },
        { icon: <SiTailwindcss /> },
        { icon: <SiBootstrap /> },
      ],
    },

    {
      category: "Backend",
      skills: [
        { icon: <SiFlask /> },
        { icon: <SiDjango /> },
        { icon: <SiExpress /> },
        { icon: <FaNodeJs /> },
      ],
    },

    {
      category: "Languages",
      skills: [
        { icon: <FaPython /> },
        { icon: <SiCplusplus /> },
        { icon: <SiC /> },
      ],
    },

    {
      category: "Tools & Others",
      skills: [
        { icon: <FaGitAlt /> },
        { icon: <FaGithub /> },
        { icon: <SiPostman /> },
        { icon: <VscVscode /> },
      ],
    },

    {
      category: "Databases",
      skills: [
        { icon: <SiPostgresql /> },
        { icon: <SiMysql /> },
        { icon: <SiMongodb /> },
      ],
    },

    {
      category: "Machine Learning & AI",
      skills: [
        { icon: <SiTensorflow /> },
        { icon: <SiPytorch /> },
        { icon: <SiNumpy /> },
      ],
    },
  ];
  return (
    <div className='about' id='about'>
      <p className="about-title">About Me</p>
      <div className="about-container">
        <div className="model-container">
          <div className="model-wrapper">
              <Canvas
                camera={{ position: [0, 0, 4], fov: 35 }}
              >
                <ambientLight intensity={1.5} />
                <directionalLight
                position={[5, 5, 5]}
                intensity={2}
              />
              <Environment preset="city" />
              <Float
                speed={2}
                rotationIntensity={0.2}
                floatIntensity={0.4}
              >
                <primitive
                  object={model.scene}
                  scale={1.5}
                  position={[0, -1.1, 0]}
                  rotation={[0, Math.PI / 4, 0]}
                />
              </Float>
              <ContactShadows
                position={[0, -1.4, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
              />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
              />
            </Canvas>
          </div>
        </div>
        <div className="about-content">
          <div className="education">
            <img src={logo} alt="amrita-logo" />
            <div className="education-content">
              <p className="education-description">B.Tech in Computer Science and Engineering (AI)</p>
              <p className="education-institute">Amrita Vishwa Vidyapeetham, Coimbatore</p>
              <p className="education-year">2024-2028</p>
            </div>
          </div>
          <div className="skills-section">
            <h1 className="main-title">Skills</h1>
            <div className="skills-categories">
            {skillData.map((section, index) => (
              <div className="category-section" key={index}>
                <h1 className='title'>{section.category}</h1>

                <div className="skills-grid">
                  {section.skills.map((skill, i) => (
                      <div
                        className="skill-icon"
                      >
                        {skill.icon}
                      </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;