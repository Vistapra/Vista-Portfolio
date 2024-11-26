import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Development"} description={"Laravel, PHP, MySQL, JavaScript, CodeIgniter, Full-Stack Development, Docker, GitHub, Tailwind CSS"} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"Design"} description={"Adobe Photoshop, CorelDRAW, Adobe Premiere Pro, Adobe Illustrator, After Effects, Adobe Lightroom"} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Digital Content"} description={"Camera Operation, Digital Marketing, E-Commerce, SEO, Content Creation, Social Media Management"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}