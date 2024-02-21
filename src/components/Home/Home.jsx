import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './Home.scss'
import webappFront from '../../assets/frontend_webdeveloper.webp'
import webapp2 from '../../assets/web-app2.png'

const Home = () => {
    const [blur, setBlur] = useState(false)

    useEffect(() => {
        document.title = 'JABZ - Home'
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlur(true);
        }, 300)
        return () => clearTimeout(timer);
    }, [])

    return (
        <main className={`blur ${blur ? 'loaded' : ''}`}>
            <h2>JABZ Web Development & IT Consulting</h2>
            <div className="containerHome">
                <img src={webappFront} alt="Web Development" className="webAppHome" />
                <section id="services">
                    <ul className="listHome">
                        <li>Web Development</li>
                        <li>IT Consulting</li>
                    </ul>
                </section>
            </div>
            <section id="get-started">

                <div className="containerHome">
                    <div className="listHome">
                        <h2>Get Started Today</h2>
                        <p className="ready">Ready to take your digital presence to the next level? Contact<br></br> us today to discuss your project requirements and receive a free consultation. Let's work together to turn your vision into reality.</p>
                    </div>
                    <img src={webapp2} alt="Web Apps" className="webAppHome" />
                </div>
            </section>
        </main>
    )
}

export default Home