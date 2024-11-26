import React from 'react'
import { Link } from 'react-router-dom';
import profile from "../../assets/images/about/profile.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Vista Pramudya, a web developer & graphic designer.
                                </h2>
                                <p>I am a graduate of Universitas AMIKOM Yogyakarta with a Bachelor's degree in Informatics Engineering, completing my studies in four years. During my time at university, I developed a solid foundation in computer science principles and practical programming skills. I have gained extensive experience in web development, digital marketing, and multimedia production.</p>
                                <p>My roles have included Web Developer, Digital Marketer, Photographer, Videographer Editing, and Graphic Designer. I am passionate about jobs involving web development, digital marketing strategies, and multimedia production. I am capable of adapting to new situations, working both in teams and individually, and I am eager to continuously grow and learn new things.</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">
                                        Get In touch <RiMailSendLine size={16} />
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery