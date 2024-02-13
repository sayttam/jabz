import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './Services.scss'

const Services = () => {
    const [blur, setBlur] = useState(false)

    useEffect(() => {
        document.title = 'JABZ - Services'
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
                <h2>Our Services</h2>
                <ul className="list">
                    <li>Website Development</li>
                    <li>Mobile App Development</li>
                    <li>IT Consulting</li>
                    <li>Digital Marketing</li>
                </ul>
            </section>

            <section id="why-choose-us">
                <h2>Why Choose Us?</h2>
                <ul className="list">
                    <li>Expertise</li>
                    <li>Customization</li>
                    <li>Quality Assurance</li>
                    <li>Customer Satisfaction</li>
                </ul>
            </section>

        </main>
    )
}

export default Services