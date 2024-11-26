import React from 'react'
import singleProjectImg from "../assets/images/projects/BumiTravel/BumiTravel.png"
import singleProject1 from "../assets/images/projects/BumiTravel/BumiTravel1.png"
import singleProject2 from "../assets/images/projects/BumiTravel/BumiTravel2.png"
import singleProject3 from "../assets/images/projects/BumiTravel/BumiTravel3.png"
import singleProject4 from "../assets/images/projects/BumiTravel/BumiTravel4.png"

const SingleProject4 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">Web Developer | Digital Marketing</p>
                        <h1>Bumi Travel</h1>
                        <p className="text-muted">Freelance</p>
                        <p className="text-muted">February 2024 to May 2024 · 4 mos</p>
                        <p className="text-muted">Bantul Regency, Yogyakarta, Indonesia · Remote</p>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="Bumi Travel Website and Digital Marketing Overview" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>4 Months (Feb - May 2024)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Bumi Travel</h3>
                            </div>
                            <div className="single-info">
                                <p>Role</p>
                                <h3>Web Developer | Digital Marketing</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies Used</p>
                                <h3>
                                    WordPress Development
                                    - E-Commerce
                                    - CorelDRAW
                                    - Adobe Photoshop
                                    - Capcut
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>Web Development and Digital Marketing</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>Remote - Bantul Regency, Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="https://bumitravel.id" target="_blank" rel="noopener noreferrer">
                                    <h3>bumitravel.id</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Contributed to Bumi Travel's online presence and digital marketing efforts through various tasks including web development, e-commerce implementation, visual content creation, and digital marketing strategy execution.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Responsibilities</h3>
                                <ul>
                                    <li>Designed and developed responsive WordPress websites to enhance user experience and brand visibility.</li>
                                    <li>Implemented and optimized e-commerce features to facilitate online bookings and increase sales.</li>
                                    <li>Created engaging visual marketing materials using CorelDRAW and Adobe Photoshop for various digital platforms.</li>
                                    <li>Produced and edited marketing video content with Capcut to boost engagement on social media.</li>
                                    <li>Developed and executed targeted digital marketing strategies to increase website traffic and conversions.</li>
                                    <li>Collaborated with the team to align web development and marketing efforts with business goals.</li>
                                    <li>Ensured website security and performance through regular maintenance and updates.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Achievements</h3>
                                <ul>
                                    <li>Increased website traffic by 20% through SEO optimization and engaging content creation.</li>
                                    <li>Improved online booking conversion rate by 15% with user-friendly e-commerce implementation.</li>
                                    <li>Enhanced brand consistency across all digital platforms, leading to improved brand recognition.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="Bumi Travel Website" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Bumi Travel E-Commerce Integration" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Bumi Travel Digital Marketing Materials" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Bumi Travel Social Media Content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject4