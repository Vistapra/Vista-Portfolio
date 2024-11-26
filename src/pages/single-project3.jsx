import React from 'react'
import singleProjectImg from "../assets/images/projects/OneApparel/OneApparel.png"
import singleProject1 from "../assets/images/projects/OneApparel/OneApparel1.png"
import singleProject2 from "../assets/images/projects/OneApparel/OneApparel2.png"
import singleProject3 from "../assets/images/projects/OneApparel/OneApparel3.png"
import singleProject4 from "../assets/images/projects/OneApparel/OneApparel4.png"

const SingleProject3 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">E-Commerce & Digital Marketing</p>
                        <h1>One Apparel</h1>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="One Apparel Platform Overview" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>1 yr 4 mos (Aug 2023 - Present)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>One Apparel</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Full-Stack Development & Digital Marketing</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies Used</p>
                                <h3>
                                    Laravel
                                    - MySQL
                                    - JavaScript
                                    - Adobe Photoshop
                                    - CorelDRAW
                                    - Adobe Premiere Pro
                                    - Capcut
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>E-Commerce & Digital Marketing</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>Hybrid - Piyungan, Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="https://www.figma.com/proto/dCrCxc9XoeMkYYfBuPKXAU/One-Apparel?node-id=1-48&node-type=canvas&t=o3Zt4XFrMCpfcGkM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A48" target="_blank" rel="noopener noreferrer">
                                    <h3>oneapparel.com</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Developed a comprehensive e-commerce platform for One Apparel fashion brand using Laravel, and managed their digital marketing initiatives to drive brand growth and online sales.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Responsibilities</h3>
                                <ul>
                                    <li>Built a full-stack e-commerce platform with Laravel, featuring secure payments and inventory management.</li>
                                    <li>Developed and implemented digital marketing strategies to enhance brand visibility and engagement.</li>
                                    <li>Created visually appealing graphics and promotional materials using Adobe Photoshop and CorelDRAW.</li>
                                    <li>Produced and edited promotional videos with Adobe Premiere Pro and Capcut to boost product awareness.</li>
                                    <li>Managed social media accounts and content to increase follower engagement and product interest.</li>
                                    <li>Analyzed digital marketing metrics to optimize campaign performance and ROI.</li>
                                    <li>Collaborated with cross-functional teams to align web development and marketing efforts with overall business goals.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Achievements</h3>
                                <ul>
                                    <li>Built a secure and feature-rich e-commerce platform with Laravel to facilitate online sales.</li>
                                    <li>Increased social media engagement by 25% through targeted content strategies.</li>
                                    <li>Contributed to a 15% growth in online sales through effective digital marketing campaigns.</li>
                                    <li>Improved brand consistency across all digital platforms, enhancing overall brand recognition.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="E-commerce Platform" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Digital Marketing Campaigns" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Content Creation" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Brand Identity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject3