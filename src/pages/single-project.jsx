import React from 'react'
import singleProjectImg from "../assets/images/projects/Sigemoy/Sigemoy.png"
import singleProject1 from "../assets/images/projects/Sigemoy/Sigemoy1.png"
import singleProject2 from "../assets/images/projects/Sigemoy/Sigemoy2.png"
import singleProject3 from "../assets/images/projects/Sigemoy/Sigemoy3.png"
import singleProject4 from "../assets/images/projects/Sigemoy/Sigemoy4.png"

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">Web Application Developer</p>
                        <h1>SiGemoy - Healthcare Management System</h1>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="SiGemoy Application Interface" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>4 mos (Aug 2024 - Present)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Poltekes Kemenkes Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Application Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies Used</p>
                                <h3>
                                    Laravel
                                    - PHP
                                    - MySQL
                                    - JavaScript
                                    - Full-Stack Development
                                    - GitHub
                                    - Docker
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>Healthcare Application</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>Remote - Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="https://sigemoy.id" target="_blank" rel="noopener noreferrer">
                                    <h3>sigemoy.id</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Developing a healthcare-focused web application for SiGemoy at Poltekes Kemenkes Yogyakarta, centered on medical record management and healthcare data processing.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Features</h3>
                                <ul>
                                    <li>Digital Odontogram system for dental condition recording</li>
                                    <li>Patient education module on oral health</li>
                                    <li>Medication information system for patients, including dosage and usage instructions</li>
                                    <li>Patient appointment management</li>
                                    <li>Dental health data reporting and analysis</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Responsibilities and Achievements</h3>
                                <ul>
                                    <li>Building a web application using Laravel and PHP, centered on medical record management and healthcare data processing</li>
                                    <li>Designing a secure MySQL database structure for handling sensitive medical information</li>
                                    <li>Implementing full-stack solutions, integrating front-end and back-end systems for a cohesive user experience</li>
                                    <li>Enhancing application interactivity and responsiveness with JavaScript</li>
                                    <li>Utilizing GitHub for version control and collaborative development</li>
                                    <li>Employing Docker for consistent deployment across environments</li>
                                    <li>Collaborating remotely with healthcare professionals and IT specialists to align the application with medical standards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="SiGemoy Feature Display" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Medical Records Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Patient Management System" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Dental Health Analytics" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject