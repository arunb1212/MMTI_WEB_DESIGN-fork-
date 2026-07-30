import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const [phase, setPhase] = useState(1);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setPhase(prev => prev === 1 ? 2 : 1);
                setFade(true);
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer-main">
            {/* Dynamic Announcement Ticker */}
            <div className="footer-ticker-wrapper">
                <div className="ticker-badge">📢 MMTI Helpdesk</div>
                <div className={`ticker-content ${fade ? 'fade-in' : 'fade-out'}`}>
                    {phase === 1 ? (
                        <div className="ticker-grid">
                            <div className="ticker-item">
                                <span>📄 Document Submission:</span>
                                <a href="mailto:modulartwo@mmti.co.in">modulartwo@mmti.co.in</a>
                            </div>
                            <div className="ticker-item">
                                <span>💬 WhatsApp Docs:</span>
                                <a href="https://wa.me/918097008862" target="_blank" rel="noreferrer">8097008862</a> / <a href="https://wa.me/919136397577" target="_blank" rel="noreferrer">9136397577</a>
                            </div>
                            <div className="ticker-item">
                                <span>📧 Course Enquiry:</span>
                                <a href="mailto:mmti.mumbai@gmail.com">mmti.mumbai@gmail.com</a>
                            </div>
                        </div>
                    ) : (
                        <div className="ticker-grid">
                            <div className="ticker-item">
                                <span>🛡️ Certificate Verification:</span>
                                <a href="mailto:verify.mmtimum@gmail.com">verify.mmtimum@gmail.com</a>
                            </div>
                            <div className="ticker-item">
                                <span>📞 Contact Support:</span>
                                <a href="tel:8976008861">8976008861</a> / <a href="tel:8097008862">8097008862</a>
                            </div>
                            <div className="ticker-item">
                                <span>🌐 Official Portals:</span>
                                <a href="http://www.mmti.co.in" target="_blank" rel="noreferrer">mmti.co.in</a> & <a href="http://www.mmtimumbai.in" target="_blank" rel="noreferrer">mmtimumbai.in</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="footer-container">
                {/* Column 1: Brand & Accreditation */}
                <div className="footer-col brand-col">
                    <div className="footer-logo-wrapper">
                        <img src="/img/MMTI logo.jpg" alt="MMTI Logo" className="footer-logo-img" />
                        <div>
                            <h3 className="footer-brand-title">Mumbai Maritime Training Institute</h3>
                            <span className="footer-tagline">27 Years of Excellence in Maritime Training</span>
                        </div>
                    </div>
                    <p className="footer-desc">
                        Grade A1 (Outstanding) DNV certified institute approved by D.G. Shipping, Govt. of India. Delivering high-standard STCW modular, competency, and refresher courses for safer ships and cleaner seas.
                    </p>
                    <div className="footer-accreditations">
                        <img src="/img/DNVLogo.jpg" alt="DNV Certified" className="accreditation-logo" title="ISO 9001:2015 DNV Certified" />
                        <img src="/img/MCA UK.png" alt="UK MCA Approved" className="accreditation-logo" title="UK MCA Approved" />
                        <img src="/img/ASS.MEMBER OF FOSMA.jpg" alt="FOSMA Member" className="accreditation-logo" title="FOSMA Member" />
                    </div>
                </div>

                {/* Column 2: Quick Navigation */}
                <div className="footer-col links-col">
                    <h4 className="footer-col-title">Quick Links</h4>
                    <ul className="footer-links-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About MMTI</a></li>
                        <li><a href="#courses">Our Courses</a></li>
                        <li><Link to="/faculty">Our Faculty & Team</Link></li>
                        <li><Link to="/gallery">Photo Gallery</Link></li>
                        <li><Link to="/library">Maritime Library</Link></li>
                        <li><Link to="/news">News & Circulars</Link></li>
                    </ul>
                </div>

                {/* Column 3: Portals & Downloads */}
                <div className="footer-col portals-col">
                    <h4 className="footer-col-title">Portals & Downloads</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/enroll" className="highlight-link">📝 Online Seat Booking</Link></li>
                        <li><a href="/photo_gallery/MMTI 2018 Award - Post-Sea Competency Courses.jpg" target="_blank" rel="noreferrer" className="highlight-link">📄 Download E-Brochure</a></li>
                        <li><Link to="/feedback">⭐ Candidate Feedback</Link></li>
                        <li><Link to="/alumini">🎓 Alumni Network</Link></li>
                        <li><a href="https://www.dgshipping.gov.in" target="_blank" rel="noreferrer">⚓ D.G. Shipping Portal</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Social Connect */}
                <div className="footer-col contact-col">
                    <h4 className="footer-col-title">Contact & Socials</h4>
                    <p className="footer-address">
                        <strong>📍 Main Office:</strong><br />
                        2nd Floor, 41/B, New Excel House, Azad Nagar Rd 2, Veera Desai Road, Andheri (W), Mumbai – 400053
                    </p>
                    <div className="social-links-grid">
                        <a href="https://wa.me/918097008862" target="_blank" rel="noreferrer" className="social-pill whatsapp">
                            💬 WhatsApp
                        </a>
                        <a href="https://www.facebook.com/mmti.mumbai" target="_blank" rel="noreferrer" className="social-pill facebook">
                            🌐 Facebook
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright bar */}
            <div className="footer-bottom-bar">
                <div className="footer-bottom-container">
                    <p>&copy; {new Date().getFullYear()} Mumbai Maritime Training Institute (MMTI). All Rights Reserved.</p>
                    <div className="footer-legal-tags">
                        <span>ISO 9001:2015 DNV Certified</span>
                        <span>•</span>
                        <span>D.G. Shipping Approved</span>
                        <span>•</span>
                        <span>STCW Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
