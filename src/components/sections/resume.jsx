import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card
                                        year={'Aug 2024 - Present'}
                                        title={'Web Application Developer'}
                                        institution={'SiGemoy - Poltekes Kemenkes Yogyakarta'}
                                    />
                                    <Card
                                        year={'Apr 2024 - Present'}
                                        title={'Web Application Developer'}
                                        institution={'E-Tooth - Poltekkes Kemenkes Yogyakarta'}
                                    />
                                    <Card
                                        year={'Aug 2023 - Present'}
                                        title={'Digital Marketing'}
                                        institution={'One Apparel'}
                                    />
                                    <Card
                                        year={'Apr 2021 - Present'}
                                        title={'Photographer & Videographer'}
                                        institution={'Rhea Yearbook'}
                                    />
                                    <Card
                                        year={'Feb 2024 - May 2024'}
                                        title={'Web Developer & Digital Marketing'}
                                        institution={'Bumi Travel'}
                                    />
                                    <Card
                                        year={'Feb 2023 - Nov 2023'}
                                        title={'Web Developer'}
                                        institution={'SMK BUDHI DHARMA PIYUNGAN'}
                                    />
                                    <Card
                                        year={'Apr 2022 - Nov 2022'}
                                        title={'Photographer & Videographer'}
                                        institution={'Qeza Aesthetic Center'}
                                    />
                                    <Card
                                        year={'Jan 2019 - Aug 2023'}
                                        title={'Digital Marketing'}
                                        institution={'Xomarshop'}
                                    />
                                </div>

                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card
                                        year={'Nov 2019 - Nov 2023'}
                                        title={'Bachelor of Informatics Engineering'}
                                        institution={'Universitas AMIKOM Yogyakarta'}
                                    />
                                    <Card
                                        year={'2016 - 2019'}
                                        title={'Senior High School'}
                                        institution={'SMAN 1 Dlingo Yogyakarta'}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}