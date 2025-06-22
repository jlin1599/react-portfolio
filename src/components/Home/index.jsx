import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'c', 'k', 'i', 'e', ' ', 'L', 'i', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e','e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="content-wrapper">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'</span>
                        <span className={`${letterClass} _15`}>m</span>

                        <img src={LogoTitle} alt="developer" className="inline-logo" />

                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25} />
                    </h1>
                    <h2>Aspiring Software Engineer</h2>
                    <Link to="contact" className="flat-button">CONTACT ME</Link>
                </div>

                <div className="logo-zone">
                    <img src={LogoTitle} alt="main-logo" className="main-logo" />
                </div>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    );
}

export default Home;
