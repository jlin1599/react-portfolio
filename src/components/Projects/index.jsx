import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import projectData from '../../data/projects.json';

const Projects = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    const renderProjects = (projects) =>{
        return(
            <div className = "images-container"> {
                projects.map((proj, idx) => {
                    return(
                        <div className = "image-box" key = {idx}> 
                            <img 
                            src = {proj.cover}
                            className = "projects-image"
                            alt = "projects"/>
                            <div className = "content">
                                <p className = "title">{proj.title}</p>
                                <h4 className = "description">{proj.description}</h4>
                                <button className = "btn" onClick ={()=> window.open(proj.url)}>
                                    View
                                </button>
                            </div>
                        </div>
                    )
                })
            }   
            </div>

        )
    }

    return (
        <>
            <div className = "container projects-page">
                <h1 className = "page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx = {15}
                    />
                </h1>
                <div>{renderProjects(projectData.project)}</div>
            </div>
            <Loader type = "pacman"/>
        </>
    );
}


export default Projects;