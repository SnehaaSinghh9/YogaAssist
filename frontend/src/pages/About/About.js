import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                Are you looking to enhance your physical and mental well-being through the ancient art of yoga? Look no further than Yoga Assist, 
                your ultimate companion for a healthier, more balanced life. Whether you're a beginner or an experienced yogi, 
                this app is designed to help you achieve your yoga goals and improve your overall well-being. 
                We've developed a real time Yoga Trainer which can detect the efficiency and efficacy of the Yoga Pose using AI. 
                This projects uses the key points in the body to detect what the user is doing. 
                Based on this the AI tells the user whether the pose is done correctly or not. 
                To implement the project we've used Tensorflow pretrained Movenet Model to Predict the Keypoints and building a neural network 
                top of that which uses these coordinates and classify a yoga pose. We have trained the model in python because of tensorflowJS 
                we can leverage the support of browser so we converted the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About Developer</h4>
                    {/* <p className="about-content">I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
                        I love to work with technology and love to share on my youtube channel, 
                        I hope this project will help you. 
                    </p> */}
                    {/* <h4>Contact</h4>
                    <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
                    <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
                    <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a> */}
                </div>
            </div>
        </div>
    )
}
