import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreed: false
    });
    const [submitted, setSubmitted] = useState(false);
    const [activeMapTab, setActiveMapTab] = useState('office');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreed) {
            alert("Please agree to the processing of personal data before submitting.");
            return;
        }
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '', agreed: false });
        }, 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-overlay"></div>
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">CONTACT US</h2>
                    <div className="contact-title-accent"></div>
                    <p className="contact-subtitle">Get in touch with Mumbai Maritime Training Institute team</p>
                </div>

                <div className="contact-wrapper">
                    {/* Left Column: Form Card */}
                    <div className="contact-card contact-form-card">
                        <h3 className="card-title" style={{color: '#00d4ff'}}>Send Us a Message</h3>
                        
                        {submitted ? (
                            <div className="success-banner">
                                <span>🎉 Thank you! Your enquiry has been received. Our team will contact you shortly.</span>
                            </div>
                        ) : null}

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Contact Number <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message / Enquiry</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-input form-textarea"
                                    placeholder="How can we assist you with course enquiry or booking?"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-checkbox">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        name="agreed"
                                        checked={formData.agreed}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">
                                        I agree to the processing of personal data for MMTI course communication.
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="send-btn">
                                📩 SUBMIT ENQUIRY
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info & Interactive Map Embed Card */}
                    <div className="contact-card contact-info-card">
                        <h3 className="institute-name">Mumbai Maritime Training Institute</h3>

                        <div className="contact-info-block">
                            <strong>📍 Main Office:</strong>
                            <p className="address-text">
                                2nd Floor, 41/B, New Excel House, Azad Nagar Road No. 2,<br />
                                Veera Desai Road, Andheri (West), Mumbai – 400 053
                            </p>
                        </div>

                        <div className="contact-info-block">
                            <strong>⚓ Practical Training Site:</strong>
                            <p className="address-text">
                                MMTI Practical Site, Khopoli Facility, Maharashtra
                            </p>
                        </div>

                        <div className="contact-info-block">
                            <strong>📞 Direct Contact Numbers:</strong>
                            <p className="address-text">
                                • Course Info: <a href="tel:8976008861">8976008861</a> / <a href="tel:8097008862">8097008862</a><br />
                                • WhatsApp Support: <a href="https://wa.me/919136397577" target="_blank" rel="noreferrer">9136397577</a>
                            </p>
                        </div>

                        <div className="contact-info-block">
                            <strong>📧 Departmental Emails:</strong>
                            <p className="address-text">
                                • Course Enquiry: <a href="mailto:mmti.mumbai@gmail.com">mmti.mumbai@gmail.com</a><br />
                                • Doc Submission: <a href="mailto:modulartwo@mmti.co.in">modulartwo@mmti.co.in</a><br />
                                • Verification: <a href="mailto:verify.mmtimum@gmail.com">verify.mmtimum@gmail.com</a>
                            </p>
                        </div>

                        {/* Interactive Google Map Tabs */}
                        <div className="map-tabs-wrapper">
                            <div className="map-tab-buttons">
                                <button
                                    type="button"
                                    className={`map-tab-btn ${activeMapTab === 'office' ? 'active' : ''}`}
                                    onClick={() => setActiveMapTab('office')}
                                >
                                    📍 Main Office Map
                                </button>
                                <button
                                    type="button"
                                    className={`map-tab-btn ${activeMapTab === 'khopoli' ? 'active' : ''}`}
                                    onClick={() => setActiveMapTab('khopoli')}
                                >
                                    ⚓ Practical Site Map
                                </button>
                            </div>

                            <div className="map-embed-container">
                                {activeMapTab === 'office' ? (
                                    <iframe
                                        title="Main Office Map"
                                        src="https://maps.google.com/maps?q=Mumbai%20Maritime%20Training%20Institute%20Andheri%20West&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, borderRadius: '12px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                ) : (
                                    <iframe
                                        title="Practical Site Map"
                                        src="https://maps.google.com/maps?q=Khopoli%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, borderRadius: '12px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                )}
                            </div>
                        </div>

                        <div className="contact-actions">
                            <Link to="/feedback" className="feedback-btn">⭐ Give Candidate Feedback</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
