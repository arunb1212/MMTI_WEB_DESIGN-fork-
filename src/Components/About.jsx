import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title">About MMTI</h2>
                    <div className="section-accent"></div>

                    <div className="about-text">
                        The Mumbai Maritime Training Institute (MMTI) has a steadfast commitment to quality maritime education and practical excellence.
                    </div>

                    <div className="heading">Key Highlights & Accreditations</div>
                    <ul className="logo-bullet-list">
                        <li>ISO 9001:2015 Quality Certified by DNV with Grade A1 (Outstanding) classification.</li>
                        <li>All maritime courses strictly approved by the Directorate General of Shipping (D.G. Shipping), Govt. of India.</li>
                        <li>Selected as preferred training institute by FOSMA & MASSA for competency & modular courses.</li>
                        <li>Honored with several "Best Training Institute" and "Best Student" national awards.</li>
                        <li>Conveniently located in Andheri, Mumbai — close to Railway Station, Metro lines, bus routes & Airport.</li>
                    </ul>
                </div>

                <div className="leadership-section">
                    <h2 className="section-title">Our Leadership & Directors</h2>
                    <div className="section-accent"></div>
                    <p className="leadership-subtitle">Run professionally and promoted by distinguished Master Mariners</p>

                    <div className="leadership-grid">
                        {/* Capt. C. L. Dubey */}
                        <div className="leader-card">
                            <div className="leader-photo-column">
                                <img
                                    src="/photo_gallery/capt.cl dubey.png"
                                    alt="Capt. C. L. Dubey"
                                    className="leader-photo"
                                />
                                <span className="leader-role-badge">Director & Owner</span>
                            </div>
                            <div className="leader-bio-column">
                                <h3 className="leader-name">Capt. C. L. Dubey</h3>
                                <p className="leader-qualifications">B.Sc., Master Mariner & Extra Master</p>
                                <ul className="logo-bullet-list leader-bullets">
                                    <li><b>Maritime Experience:</b> 20 years of sailing experience and 34 years as a Maritime Trainer.</li>
                                    <li><b>Academic & DGS Panel:</b> Paper setter, moderator, and examiner for Mumbai University and Directorate General of Shipping, Govt. of India.</li>
                                    <li><b>IMO & International Delegate:</b> Fellow and Warden of The Company of Master Mariners of India (CMMI). Represented India at IMO HTW9 (London, Feb 2023), HTW10, and HTW11.</li>
                                    <li><b>Author & IMO Competent Person:</b> Author of several maritime textbooks used worldwide. Appointed as IMO "Competent Person" in Feb 2024.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Capt. O. P. Yadav */}
                        <div className="leader-card">
                            <div className="leader-photo-column">
                                <img
                                    src="/photo_gallery/capt.op yadav.png"
                                    alt="Capt. O. P. Yadav"
                                    className="leader-photo"
                                />
                                <span className="leader-role-badge">Director & Owner</span>
                            </div>
                            <div className="leader-bio-column">
                                <h3 className="leader-name">Capt. O. P. Yadav</h3>
                                <p className="leader-qualifications">Master Mariner</p>
                                <ul className="logo-bullet-list leader-bullets">
                                    <li><b>Maritime Experience:</b> 26 years of sailing experience and 28 years as a Maritime Trainer.</li>
                                    <li><b>DGS Examination Panel:</b> Member on the panel of Oral Examinations in D.G. Shipping, Govt. of India.</li>
                                    <li><b>CMMI Member:</b> Active member of The Company of Master Mariners of India (CMMI).</li>
                                </ul>
                            </div>
                        </div>

                        {/* Capt. F. X. Coutinho */}
                        <div className="leader-card">
                            <div className="leader-photo-column">
                                <img
                                    src="/img/empty_profile.png"
                                    alt="Capt. F. X. Coutinho"
                                    className="leader-photo placeholder-avatar"
                                />
                                <span className="leader-role-badge">Principal</span>
                            </div>
                            <div className="leader-bio-column">
                                <h3 className="leader-name">Capt. F. X. Coutinho</h3>
                                <p className="leader-qualifications">Principal & Master Mariner</p>
                                <ul className="logo-bullet-list leader-bullets">
                                    <li><b>Maritime Experience:</b> 12 years of sailing experience and 22 years as a Maritime Trainer.</li>
                                    <li><b>DGS Panels:</b> Panel member for Oral Examinations and Paper Correction Group in D.G. Shipping, Govt. of India.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Capt. M. R. Martins */}
                        <div className="leader-card">
                            <div className="leader-photo-column">
                                <img
                                    src="/img/empty_profile.png"
                                    alt="Capt. M. R. Martins"
                                    className="leader-photo placeholder-avatar"
                                />
                                <span className="leader-role-badge">Vice-Principal</span>
                            </div>
                            <div className="leader-bio-column">
                                <h3 className="leader-name">Capt. M. R. Martins</h3>
                                <p className="leader-qualifications">Vice-Principal & Master Mariner</p>
                                <ul className="logo-bullet-list leader-bullets">
                                    <li><b>Maritime Experience:</b> 10 years of sailing experience and 12 years as a Maritime Trainer.</li>
                                    <li><b>DGS Panels:</b> Member of Oral Examination panel and Paper Correction group in D.G. Shipping, Govt. of India.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="team-button-container">
                        <Link to="/faculty">
                            <button className="cta-btn">View All Faculty & Team</button>
                        </Link>
                    </div>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <div className="card-icon">⚓</div>
                        <h3>STCW Compliant</h3>
                        <p>All courses strictly adhere to International STCW Convention standards for safer and more secure ships.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">👨‍🎓</div>
                        <h3>Expert Faculty</h3>
                        <p>Learn from highly experienced maritime professionals with years of practical experience at sea.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🏆</div>
                        <h3>100% Quality</h3>
                        <p>ISO certified training with proven track record of producing top-quality maritime professionals.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🌍</div>
                        <h3>Industry Recognized</h3>
                        <p>Our certifications are recognized globally, opening doors to international maritime careers.</p>
                    </div>
                </div>

                <div className="alumni-network">
                    <div className="alumni-image-holder">
                        <div className="alumni-image-blank">MMTI Alumni Community</div>
                    </div>
                    <div className="alumni-action">
                        <h3>Alumni Network</h3>
                        <p>Connect with the MMTI alumni community and explore success stories from past students.</p>
                        <Link to="/alumini" className="alumni-btn">Visit Alumni Network</Link>
                    </div>
                </div>

                <div className="quality-policy">
                    <h3>Quality Policy (ISO 9001:2015 - CL. 5.2.1)</h3>
                    <p>
                        We at MMTI strive to provide maritime training of the highest standard to serving, or those intending
                        to serve in the Merchant Navy, so that we have Safer and Securer Ships and Cleaner Seas.
                        We aim to achieve this by explicitly complying with the STCW Convention as amended and all related National Legislation.
                    </p>
                </div>
            </div>
        </section>
    );
}
