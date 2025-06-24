import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import workData from '../../data/work.json';

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    const renderWork = (work) => {
        return (
            <div className="work-container">
                {work.map((job, idx) => {
                    return (
                        <div className="work-box" key={idx}>
                            <div className="work-header">
                                <h3 className="job-title">{job.title}</h3>
                                <span className="company">{job.company}</span>
                                <span className="duration">{job.duration}</span>
                            </div>
                            <div className="work-content">
                                <p className="description">{job.description}</p>
                                <div className="technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-tags">
                                        {job.technologies.map((tech, techIdx) => (
                                            <span key={techIdx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                {job.achievements && (
                                    <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                            {job.achievements.map((achievement, achIdx) => (
                                                <li key={achIdx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className="container work-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Work Experience".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderWork(workData.work)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Work;