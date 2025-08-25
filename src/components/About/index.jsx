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
                <p>I'm a motivated software engineer who enjoys turning ideas into real, functional products. I take pride in building clean, user-friendly applications that make a difference.</p>
                <p>Rising Junior studying Computer Science at Hunter College with a 3.5 GPA, I'm constantly learning and expanding my skills through personal projects, internships, and hackathons. I'm a CUNY Tech Prep Fellow (Full Stack) and CodePath ICP 2025 participant. My goal is to write clean, efficient code and make an impact with my work.</p>
                <p>I've gained valuable experience through multiple internships, including building senior-care platforms at ERbuddy, optimizing health apps at The Difference App LLC, and developing automation solutions at Evergreen Investments. I've also won 1st place at HunterHacks '25 for my HabitAware project and was selected for CUNY Pitchfest 2025.</p>
                <p>Outside of tech, I enjoy basketball, traveling, and video games. I'm always open to new challenges and opportunities to grow as a software engineer.</p>
            </div>
            <div className="about-tech-stack">
              <h2>Languages</h2>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
              </ul>
              <h2>Libraries &amp; Frameworks</h2>
              <ul className="tech-list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Tailwind CSS</li>
                <li>Vitest</li>
              </ul>
              <h2>Developer Tools</h2>
              <ul className="tech-list">
                <li>Git/GitHub</li>
                <li>Bash/CLI</li>
                <li>Linux</li>
                <li>Vercel</li>
                <li>Supabase</li>
                <li>AWS</li>
                <li>Localstack</li>
                <li>Postman</li>
                <li>REST APIs</li>
              </ul>
              <h2>Databases</h2>
              <ul className="tech-list">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>DynamoDB</li>
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