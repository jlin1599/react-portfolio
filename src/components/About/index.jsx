import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className = "container about-page">
          <div className="text-stack-wrapper">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A', 'b','o', 'u', 't', ' ', 'm', 'e']}
                        idx = {15}
                    />
                </h1>
                <p>I'm a motivated developer who enjoys turning ideas into real, functional products. I take pride in building clean, user-friendly applications that make a difference.</p>
                <p>Rising Junior studying Computer Science at Hunter College, I'm constantly learning and expanding my skills through personal projects, internships, and hackathons. My goal is to write clean, efficient code and make an impact with my work.</p>
                <p>Outside of tech, I enjoy basketball, traveling, and video games. I'm always open to new challenges and opportunities to grow as a software engineer.</p>
            </div>
            <div className="about-tech-stack">
              <h2>Languages</h2>
              <ul className="tech-list">
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <h2>Tools &amp; Frameworks</h2>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind</li>
                <li>Vercel</li>
                <li>Supabase</li>
                <li>REST APIs</li>
                <li>Git</li>
                <li>Linux</li>
                <li>VS Code</li>

              </ul>
            </div>
          </div>

            <div className = 'stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className = "face1"> 
                        <FontAwesomeIcon icon = {faReact} color = '#61DBFB'/>
                    </div>
                    <div className = "face2"> 
                        <FontAwesomeIcon icon = {faHtml5} color = '#E34F26'/>
                    </div>
                    <div className = "face3"> 
                        <FontAwesomeIcon icon = {faPython} color = '#3776AB'/>
                    </div>
                    <div className = "face4"> 
                        <FontAwesomeIcon icon = {faJsSquare} color = '#F7DF1E'/>
                    </div>
                    <div className = "face5"> 
                        <FontAwesomeIcon icon = {faCss3} color = '#1572B6'/>
                    </div>
                    <div className = "face6"> 
                        <FontAwesomeIcon icon = {faGitAlt} color = '#F1502F'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    )
}

export default About