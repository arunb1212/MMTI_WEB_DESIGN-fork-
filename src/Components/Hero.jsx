import './Hero.css';
import { useEffect, useState } from 'react';
import CircularGallery from '../bits/CircularGallery';
import CarouselGallery from '../bits/CarouselGallery';

export default function Hero() {
    const dialogues = [
        'Please note that your candidates has to report to our Institute at 8AM on very first day to register his details on D.G.S.website & bio-metric for attendance.',
        'Candidate has to punch his finger (for Bio-matric attendance) for In & Out timings as per Course schedule or his course get lapse.',
        'For booking, you have to submit 50% of total fees and your all required documents, 2 days before of course starting or your booking could be cancelled',
        'As per the new DGS Tr. Cir. No. 4 of 2018 "The training institutes are directed not to conduct any batch of course, if the batch strength is less than 25% of the approved intake capacity granted by this Directorate" You are requested to contact the institute for clarification.'
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Initial check and event listener for screen size
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            // fade out, change text, fade in
            setVisible(false);
            setTimeout(() => {
                setIndex((i) => (i + 1) % dialogues.length);
                setVisible(true);
            }, 300);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="home" className="hero">
                <div className="hero-background">
                    <img
                        src="/img/bg_banner (3).jpg"
                        alt="Maritime background"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">NOW BOOK YOUR SEATS ONLINE </h1>
                        <p className="hero-subtitle">27 Years of Excellence | ISO 9001:2015 DNV Certified | Industry-Leading Training for a Safer Sea</p>
                        <div className="hero-cta-buttons">
                            <a href="#courses" className="cta-button primary">Explore Courses</a>
                            <a href="#about" className="cta-button secondary">Learn More</a>
                        </div>
                    </div>

                    <div className="hero-stats">

                        <div className="stat-card">
                            <div className="stat-number">27+</div>
                            <div className="stat-label">Years of Excellence</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Students Trained</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">STCW Compliant</div>
                        </div>

                    </div>


                    <div className="hero-logos">

                            {/* <img src="/img/D.G.SHIPPING.jpg" alt="D.G.Shipping" className="logo" /> */}
                            <img src="/img/DNVLogo.jpg" alt="DNV Logo" className="logo" />
                            <img src="/img/MCA UK.png" alt="MCA Logo" className="logo" />


                            <img src="/img/MMTI logo.jpg" alt="MMTI Logo" className="logo" />
                            <img src="/img/ASS.MEMBER OF FOSMA.jpg" alt="Fosma" className="logo" />
                            <img src="/img/MMTI LLP LOGO - Final.jpg" alt="MMTI LLP" className="logo" />

                    </div>

                    <div className='advertisement-section'>
                        <div className="advertisement-card">
                            <div className="ad-card-header">
                                <h3 className="ad-card-title">Job Opportunities</h3>
                                <span className="ad-card-badge">Limited Time</span>
                            </div>
                            <p className="ad-card-description">
                                Join our exclusive maritime training program and get certified by international standards.
                                Enhance your career with hands-on experience and expert guidance from industry professionals.
                            </p>
                            <ul className="ad-card-features">
                                <li>✓ STCW Certified Training</li>
                                <li>✓ Expert Instructors</li>
                                <li>✓ 100% Placement Support</li>
                            </ul>
                            <a href="#courses" className="ad-card-link">Read More →</a>
                        </div>
                    </div>
                </div>

            </section>
            {/* Rotating dialogue box between hero sections */}
            <div className="dialogue-wrapper">
                <div className={`dialogue-box ${visible ? 'show' : 'hide'}`}>
                    {dialogues[index]}
                </div>
            </div>

            <section id="home" className="hero">
                <div className="hero-background-2">
                    <img
                        src="/img/quality_policy.jpg"
                        alt="Maritime background"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title-2">QUALITY POLICY (ISO 9001:2015 - CL. 5.2.1)</h1>
                        <p className="hero-subtitle-2">We at MMTI strive to provide maritime training of the highest standard to
                            serving, or those intending to serve in the Merchant Navy, so that we have Safer and Securer Ships
                            and Cleaner Seas. We aim to achieve this by explicitly complying with the STCW Convention as
                            amended and all related National Legislation.</p>

                    </div>

                    {isMobile ? (
                        <div className="carousel-gallery-container">
                            <CarouselGallery />
                        </div>
                    ) : (
                        <div className="circular-gallery-container">
                            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                        </div>
                    )}
                </div>

            </section>
            <section id="home" className="hero">
                <div className="hero-background-3">
                    <img
                        src="/img/section-3.jpg"
                        alt="Maritime background"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title-3">FIND YOUR COURSE !! LOOK FOR BATCH YOU WISH & BOOK </h1>
                        <p className="hero-subtitle-3">FOR ANY FURTHER INFORMATION YOU CAN EMAIL OR CALL MMTI, CONTACT DETAILS AVAILABLE ON WEBSITE
                            Mumbai Maritime Training Institute</p>

                    </div>

                </div>

            </section>
        </>

    );
}
