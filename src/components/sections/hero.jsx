import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.png"
import partner1 from "../../assets/images/client-logos/partner1.png"
import partner2 from "../../assets/images/client-logos/partner2.png"
import partner3 from "../../assets/images/client-logos/partner3.png"
import partner4 from "../../assets/images/client-logos/partner4.png"
import partner5 from "../../assets/images/client-logos/partner5.png"
import partner6 from "../../assets/images/client-logos/partner6.png"
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Vista Pramudya</h2>
                                <p>Web Developer & Graphic Designer.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li>
                                            <Link to="https://www.linkedin.com/in/vista-pramudya-ardiansyah-6a17962a8/" target="_blank" rel="noopener noreferrer">
                                                <RiLinkedinFill size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://github.com/Vistapra" target="_blank" rel="noopener noreferrer">
                                                <RiGithubLine size={20} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Vista Pramudya, crafting exceptional digital experiences through web development and design.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Work</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Company I Worked With</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <img src={partner1} alt="" />
                                                <img src={partner2} alt="" />
                                                <img src={partner3} alt="" />
                                                <img src={partner4} alt="" />
                                                <img src={partner5} alt="" />
                                                <img src={partner6} alt="" />
                                            </Marquee>
                                        </div>
                                    </div>
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

export default Hero