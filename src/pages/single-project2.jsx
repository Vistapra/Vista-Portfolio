import React from 'react'
import singleProjectImg from "../assets/images/projects/ETooth/ETooth.png"
import singleProject1 from "../assets/images/projects/ETooth/ETooth1.png"
import singleProject2 from "../assets/images/projects/ETooth/ETooth2.png"
import singleProject3 from "../assets/images/projects/ETooth/ETooth3.png"
import singleProject4 from "../assets/images/projects/ETooth/ETooth4.png"

const SingleProject2 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">Web Application Developer</p>
                        <h1>E-Tooth Dental Consultation Platform</h1>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="E-Tooth Platform Interface" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>8 mos (Apr 2024 - Present)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Poltekkes Kemenkes Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Application Development & AI Integration</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies Used</p>
                                <h3>
                                    Laravel
                                    - PHP
                                    - Tailwind CSS
                                    - JavaScript
                                    - Artificial Intelligence (AI)
                                    - GitHub
                                    - Docker
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>Healthcare Technology</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>Hybrid - Bantul Regency, Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="https://e-tooth.id" target="_blank" rel="noopener noreferrer">
                                    <h3>e-tooth.id</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Developing a comprehensive dental health web application focusing on consultation, education, and patient management for Poltekkes Kemenkes Yogyakarta. The platform is built using Laravel/PHP and enhanced with modern technologies.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Features</h3>
                                <ul>
                                    <li>Medical dental consultation system with secure patient portals</li>
                                    <li>Basic chatbot for general inquiries and appointment scheduling assistance</li>
                                    <li>Comprehensive dental education module to improve patient awareness</li>
                                    <li>Chat history feature for continuous care and follow-ups</li>
                                    <li>Administrative dashboard for dental professionals to manage patient data and treatment plans</li>
                                    <li>Basic analytics tools for tracking user engagement and application performance</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Technical Highlights</h3>
                                <ul>
                                    <li>Responsive UI design using Tailwind CSS for cross-device compatibility</li>
                                    <li>Secure patient data management compliant with healthcare standards</li>
                                    <li>Docker containerization for consistent deployment across environments</li>
                                    <li>Version control through GitHub for collaborative development</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Achievements</h3>
                                <ul>
                                    <li>Streamlined appointment scheduling process, reducing administrative workload</li>
                                    <li>Increased user engagement through accessible dental education resources</li>
                                    <li>Improved continuity of care with implementation of chat history feature</li>
                                    <li>Enhanced overall patient experience through user-friendly interface and informative content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="Consultation Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Patient Portal Dashboard" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Educational Resources Module" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Administrative Dashboard" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject2