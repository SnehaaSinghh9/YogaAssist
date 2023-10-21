import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                {/* <img src="frontend\src\utils\images\Logo.png" ></img> */}
                <h1 className='home-heading'>YogaAssist</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
            </div>

            {/* <h1 className="description">A Yoga AI Trainer</h1> */}
            <div className="home-main">
                <div className='heading-sec'>
                    <h1>YOGA</h1>
                    <h3>ANYTIME ANYWHERE</h3>
                    <h4>Start your journey to a healthy lifestyle.</h4>
                </div>
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>

                </div>
            </div>

            <div className='footer'></div>
        </div>
    )
}
