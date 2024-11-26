import React from 'react'
import singleProjectImg from "../assets/images/projects/BudhiDharma/BudhiDharma.png"
import singleProject1 from "../assets/images/projects/BudhiDharma/BudhiDharma1.png"
import singleProject2 from "../assets/images/projects/BudhiDharma/BudhiDharma2.png"
import singleProject3 from "../assets/images/projects/BudhiDharma/BudhiDharma3.png"
import singleProject4 from "../assets/images/projects/BudhiDharma/BudhiDharma4.png"

const SingleProject5 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p className="text-uppercase">Academic Information System Development</p>
                        <h1>SMK Budhi Dharma Piyungan</h1>
                    </div>
                </div>
            </div>

            <div className="single-project-image">
                <img src={singleProjectImg} alt="SMK Budhi Dharma Information System Overview" />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Duration</p>
                                <h3>10 Months (Feb - Nov 2023)</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>SMK Budhi Dharma Piyungan</h3>
                            </div>
                            <div className="single-info">
                                <p>Role</p>
                                <h3>Full-Stack Web Developer</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies Used</p>
                                <h3>
                                    PHP (CodeIgniter 4)
                                    - MySQL
                                    - JavaScript
                                    - Bootstrap
                                    - HTML/CSS
                                </h3>
                            </div>
                            <div className="single-info">
                                <p>Project Type</p>
                                <h3>Academic Information System</h3>
                            </div>
                            <div className="single-info">
                                <p>Location</p>
                                <h3>Hybrid - Piyungan, Yogyakarta</h3>
                            </div>
                            <div className="single-info">
                                <p>Link</p>
                                <a href="smkbdbs.sch.id" target="_blank" rel="noopener noreferrer">
                                    <h3>smkbdbs.sch.id</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <div className="mb-4">
                                <h3 className="text-white">Project Overview</h3>
                                <p>
                                    Developed and implemented a comprehensive Academic Information System for SMK Budhi Dharma Piyungan, transforming their traditional administrative processes into a streamlined digital ecosystem. The system serves as an integrated platform for students, teachers, staff, and parents, facilitating efficient academic management and communication.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Features Developed</h3>
                                <ul>
                                    <li>Student Management Module: Digital enrollment system, student profiles, and academic progress tracking</li>
                                    <li>Course Management System: Curriculum planning, class scheduling, and course material distribution</li>
                                    <li>Grade Management: Digital grade recording, report card generation, and performance analytics</li>
                                    <li>Attendance System: Digital attendance tracking for students and staff</li>
                                    <li>Staff Portal: Teacher and administrative staff management interface</li>
                                    <li>Parent Portal: Real-time access to student progress, attendance, and school communications</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Technical Implementation</h3>
                                <ul>
                                    <li>Developed a robust backend using PHP with CodeIgniter framework for efficient MVC architecture</li>
                                    <li>Designed and optimized MySQL database structure for seamless data management</li>
                                    <li>Created responsive frontend using Bootstrap and JavaScript for cross-device compatibility</li>
                                    <li>Implemented secure user authentication and role-based access control</li>
                                    <li>Integrated real-time notifications and updates using JavaScript</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-white">Key Achievements</h3>
                                <ul>
                                    <li>Reduced administrative paperwork by 60% through digital process implementation</li>
                                    <li>Enhanced parent-teacher communication through integrated portal system</li>
                                    <li>Streamlined grade reporting process, reducing processing time by 75%</li>
                                    <li>Successfully trained staff and faculty on system usage, achieving 100% adoption rate</li>
                                    <li>Implemented data backup and recovery systems ensuring zero data loss</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="Student Portal Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="Grade Management System" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="Staff Management Dashboard" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="Parent Portal View" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject5