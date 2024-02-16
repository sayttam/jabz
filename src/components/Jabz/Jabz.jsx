import React from "react"
import { useState, useEffect } from "react"
import logo from '../../assets/jabz.png'
import './Jabz.scss'

const Jabz = () => {
    const [blur, setBlur] = useState(false)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        document.title = 'JABZ - Home'
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlur(true);
        }, 500)

        const timer2 = setTimeout(() => {
            setFade(true);
        }, 1000)
        return () => clearTimeout(timer2)
    }, [])

    return (
        <>
            <div className="jabz-logo">
                <div className={`blurJ ${blur ? 'loaded' : ''}`}>
                    <img src={logo} alt="JABZ" />
                </div>
                <div className={`heartbeat fade ${fade ? 'loaded' : ''}`}>
                    <h2>Coming soon!</h2>
                </div>
            </div>
        </>
    )

}

export default Jabz