import React from 'react'
import singleProjectImg from "../assets/images/projects/Qeza/Qeza.png"
import singleProject1 from "../assets/images/projects/Qeza/Qeza1.png"
import singleProject2 from "../assets/images/projects/Qeza/Qeza2.png"
import singleProject3 from "../assets/images/projects/Qeza/Qeza3.png"
import singleProject4 from "../assets/images/projects/Qeza/Qeza4.png"

const SingleProject6 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">Visual Content Creation & Brand Development</p>
                        <h1>Qeza Aesthetic Center</h1>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="Qeza Aesthetic Center Visual Content Overview" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>8 Months (Apr - Nov 2022)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Qeza Aesthetic Center</h3>
                            </div>
                            <div className="single-info">
                                <p>Role</p>
                                <h3>Lead Photographer & Videographer</h3>
                            </div>
                            <div className="single-info">
                                <p>Software Expertise</p>
                                <h3>
                                    Adobe Photoshop
                                    - Adobe Premiere Pro
                                    - Adobe Illustrator
                                    - After Effects
                                    - DaVinci Resolve
                                    - CorelDRAW
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>Visual Content Creation</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>On-site - Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="https://www.instagram.com/qezaclinic/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <h3>Qeza skin</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Served as the primary visual content creator for Qeza Aesthetic Center, responsible for developing and implementing comprehensive visual strategies to showcase their premium beauty and wellness services. Led end-to-end production of professional photography and videography content, contributing significantly to the center's brand development and marketing success.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Core Responsibilities</h3>
                                <ul>
                                    <li>Managed complete photography and videography projects from concept development to final delivery</li>
                                    <li>Created high-quality visual content showcasing aesthetic treatments, products, and facility</li>
                                    <li>Performed advanced post-production using industry-standard software for optimal results</li>
                                    <li>Developed branded graphics and marketing materials maintaining consistent visual identity</li>
                                    <li>Collaborated with the marketing team to align visual content with campaign objectives</li>
                                    <li>Operated professional camera equipment and lighting systems for optimal image quality</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Technical Expertise</h3>
                                <ul>
                                    <li>Photography: Professional product and service photography, lifestyle shots, and before-after documentation</li>
                                    <li>Videography: Treatment procedure videos, promotional content, and social media shorts</li>
                                    <li>Post-Production: Advanced color grading, visual effects, and motion graphics</li>
                                    <li>Design: Marketing collateral, social media templates, and branded visual assets</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Achievements</h3>
                                <ul>
                                    <li>Drove 30% increase in social media engagement through creation of compelling visual content</li>
                                    <li>Generated 20% growth in service bookings through effective before-after treatment documentation</li>
                                    <li>Reduced marketing material production time by 25% through optimized workflow processes</li>
                                    <li>Established comprehensive visual content library for ongoing marketing initiatives</li>
                                    <li>Implemented standardized visual guidelines ensuring consistent brand representation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="Treatment Photography Sample" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Product Photography Portfolio" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Marketing Campaign Visuals" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Video Production Samples" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject6