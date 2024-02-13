import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './Home.scss'

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
            <section id="services">
                <h2>JABZ Web Development & IT Consulting</h2>
                <ul className="list">
                    <li>Website Development</li>
                    <li>Mobile App Development</li>
                    <li>IT Consulting</li>
                    <li>Digital Marketing</li>
                </ul>
            </section>
            
            <section id="get-started">
                <h2>Get Started Today</h2>
                <p>Ready to take your digital presence to the next level? Contact us today to discuss your project requirements and receive a free consultation. Let's work together to turn your vision into reality.</p>
            </section>
        </main>
    )
}

export default Home