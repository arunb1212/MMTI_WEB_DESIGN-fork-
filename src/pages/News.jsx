import Footer from '../Components/Footer';
import './News.css';
import { useState } from 'react';

export default function News() {
    const [activeTab, setActiveTab] = useState('toppers');

    const toppersData = [
        {
            id: 1,
            name: 'Capt. Arun Sharma',
            course: 'Chief Mate Competency',
            month: 'February 2026',
            score: '98%',
            achievement: 'Outstanding performance in Navigation'
        },
        {
            id: 2,
            name: 'Second Officer Priya Verma',
            course: 'Advanced Safety Management',
            month: 'February 2026',
            score: '96%',
            achievement: 'Excellent grasp of Risk Management'
        },
        {
            id: 3,
            name: 'Officer Rajesh Kumar',
            course: 'Second Mate (FG)',
            month: 'February 2026',
            score: '95%',
            achievement: 'Outstanding maritime knowledge'
        },
        {
            id: 4,
            name: 'Cadet Sneha Desai',
            course: 'Basic Safety Training',
            month: 'February 2026',
            score: '94%',
            achievement: 'Quick learner with excellent safety practices'
        }
    ];

    const noticeBoard = [
        {
            id: 1,
            title: 'New Batch Starting March 2026',
            date: '2026-02-20',
            priority: 'high',
            content: 'Enroll now for Second Mate (FG) and Chief Mate Phase 1 courses starting from March 15, 2026. Limited seats available.'
        },
        {
            id: 2,
            title: 'Campus Closed - National Holiday',
            date: '2026-02-26',
            priority: 'medium',
            content: 'MMTI will remain closed on March 8, 2026 (Women\'s Day). No classes scheduled on this date.'
        },
        {
            id: 3,
            title: 'Simulator Training Upgrade',
            date: '2026-02-18',
            priority: 'medium',
            content: 'Our ship bridge simulator has been upgraded with latest navigation systems. Enhanced training modules now available.'
        },
        {
            id: 4,
            title: 'Guest Lecture - International Shipping Standards',
            date: '2026-02-15',
            priority: 'low',
            content: 'Captain James Mitchell from International Maritime Organization will conduct a lecture on SOLAS conventions on March 5, 2026 at 3 PM.'
        }
    ];

    const dgShippingUpdates = [
        {
            id: 1,
            title: 'New STCW Code Amendments 2024',
            date: '2026-02-20',
            link: '#',
            description: 'Updated standards for maritime training and certification effective March 1, 2026'
        },
        {
            id: 2,
            title: 'Port State Control Inspections - Guidelines',
            date: '2026-02-15',
            link: '#',
            description: 'Enhanced procedures for PSC inspections and compliance documentation'
        },
        {
            id: 3,
            title: 'Seafarer Safety Advisory Notice',
            date: '2026-02-10',
            link: '#',
            description: 'Important advisories on maritime security and personal safety measures'
        },
        {
            id: 4,
            title: 'Merchant Shipping Act Updates',
            date: '2026-02-05',
            link: '#',
            description: 'Latest regulations regarding crew management and vessel operations'
        }
    ];

    const imoUpdates = [
        {
            id: 1,
            title: 'IMO 2030 Carbon Intensity Goals',
            date: '2026-02-22',
            link: '#',
            description: 'New environmental regulations reducing carbon emissions from international shipping'
        },
        {
            id: 2,
            title: 'MARPOL Annex VI - Air Pollution Prevention',
            date: '2026-02-18',
            link: '#',
            description: 'Updated guidelines on fuel oil quality and SOx emission control systems'
        },
        {
            id: 3,
            title: 'Maritime Labour Convention (MLC) Updates',
            date: '2026-02-12',
            link: '#',
            description: 'Enhanced crew welfare standards and working conditions on merchant vessels'
        },
        {
            id: 4,
            title: 'Polar Code Implementation',
            date: '2026-02-08',
            link: '#',
            description: 'Mandatory requirements for ships operating in polar waters'
        }
    ];

    const womenAtSea = [
        {
            id: 1,
            name: 'Captain Anjali Gupta',
            designation: 'Master Mariner',
            achievement: 'First female Master on a container ship in Indian Merchant Navy',
            image_placeholder: '👩‍✈️'
        },
        {
            id: 2,
            name: 'Second Officer Deepika Singh',
            designation: 'Navigation Officer',
            achievement: 'Recipient of Women in Maritime Award 2025',
            image_placeholder: '⚓'
        },
        {
            id: 3,
            name: 'Chief Engineer Priya Patel',
            designation: 'Chief Engineer',
            achievement: 'Leading technical innovations in marine propulsion systems',
            image_placeholder: '⚙️'
        },
        {
            id: 4,
            name: 'Officer Radhika Menon',
            designation: 'Deck Officer',
            achievement: 'Mentor and advocate for women safety at sea',
            image_placeholder: '🌊'
        }
    ];

    const getPriorityClass = (priority) => {
        if (priority === 'high') return 'priority-high';
        if (priority === 'medium') return 'priority-medium';
        return 'priority-low';
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <section className="news">
            <div className="news-container">
                <div className="news-header">
                    <h1 className="news-title">Highlights & News</h1>
                    <div className="news-accent"></div>
                    <p className="news-subtitle">
                        Stay updated with the latest maritime news and MMTI achievements
                    </p>
                </div>

                <div className="news-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'toppers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('toppers')}
                    >
                        🏆 Toppers of Month
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'notices' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notices')}
                    >
                        📢 MMTI Notice Board
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'dg-shipping' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dg-shipping')}
                    >
                        ⚓ D.G.Shipping
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'imo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('imo')}
                    >
                        🌍 IMO Updates
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'women' ? 'active' : ''}`}
                        onClick={() => setActiveTab('women')}
                    >
                        👩‍⚓ Women at Sea
                    </button>
                </div>

                <div className="news-content">
                    {/* Toppers Section */}
                    {activeTab === 'toppers' && (
                        <div className="content-section toppers-section">
                            <div className="section-header">
                                <h2>Toppers of the Month</h2>
                                <p>Celebrating excellence in maritime education</p>
                            </div>
                            <div className="toppers-grid">
                                {toppersData.map((topper) => (
                                    <div key={topper.id} className="topper-card">
                                        <div className="topper-rank">#{topper.id}</div>
                                        <div className="topper-content">
                                            <h3 className="topper-name">{topper.name}</h3>
                                            <p className="topper-course">{topper.course}</p>
                                            <p className="topper-achievement">"{topper.achievement}"</p>
                                            <div className="topper-footer">
                                                <span className="topper-score">{topper.score}</span>
                                                <span className="topper-month">{topper.month}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Notice Board Section */}
                    {activeTab === 'notices' && (
                        <div className="content-section notices-section">
                            <div className="section-header">
                                <h2>MMTI Notice Board</h2>
                                <p>Important announcements and updates</p>
                            </div>
                            <div className="notices-list">
                                {noticeBoard.map((notice) => (
                                    <div key={notice.id} className={`notice-card ${getPriorityClass(notice.priority)}`}>
                                        <div className="notice-header">
                                            <h3>{notice.title}</h3>
                                            <span className="notice-priority">{notice.priority.toUpperCase()}</span>
                                        </div>
                                        <p className="notice-content">{notice.content}</p>
                                        <p className="notice-date">{formatDate(notice.date)}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Important Notices */}
      <h3 className="notice-heading">Important Notices</h3>
      <div className="courses-notice">
        {/* <div className="notice-block-1">
          <p className="notice-line">
            📌{" "}
            <strong>Certificate Charges Update (Effective 01/02/2025):</strong>
          </p>
          <p className="notice-text">
            Certificates generated from the DG Shipping Portal will incur
            additional charges:
          </p>
          <ol>
            <li>Fees per certificate: ₹36</li>
            <li>GST @18%: ₹6.48</li>
            <li>
              <strong>Total: ₹42.48/-</strong>
            </li>
          </ol>
        </div> */}
        <div className="notice-block-2">
          <p className="notice-line">
            💳 <strong>Course Booking Payment Policy:</strong>
          </p>
          <p className="notice-text">
            Internet handling charges apply when booking courses via our website
            using the payment gateway.
          </p>
          <p className="notice-text">
            No extra charges if payment is made directly to MMTI via
            debit/credit card or cheque.
          </p>
        </div>

        <div className="notice-block-3">
          <p className="notice-line">
            👔 <strong>Dress Code Guidelines:</strong>
          </p>
          <p className="notice-text">
            This policy ensures a professional environment within the
            institution. Please adhere to the following:
          </p>
          <ul className="notice-list">
            <li>
              <strong>Men:</strong> Formal shirt and trousers or collared
              T-shirts with trousers. Formal shoes.
            </li>
            <li>
              <strong>Women:</strong> Formal shirts, sarees, or kurtis (except
              sleeveless) with leggings/pants. Formal footwear.
            </li>
            <li>
              Casual wear such as ripped jeans, collarless T-shirts, shorts,
              mini/midi skirts, sandals, and bathroom slippers are not permitted
              for physical classes from Monday to Friday. Saturdays may be
              informal.
            </li>
          </ul>
        </div>

        <div className="notice-block-4">
          <p className="notice-line">
            📱 <strong>General Conduct & Safety:</strong>
          </p>
          <ul className="notice-list">
            <li>Mobiles must be kept in bags and not used during classes.</li>
            <li>
              Smoking is allowed only in the designated area on the ground
              floor.
            </li>
            <li>
              Maximum 8 persons allowed in the lift at a time. Overloading may
              lead to severe consequences.
            </li>
            <li>
              Failure to comply with these instructions may result in
              disciplinary action.
            </li>
          </ul>

          <p className="notice-text">
            {" "}
            We appreciate your cooperation in upholding the professional
            standards of our institute.
          </p>
        </div>
      </div>
                        </div>
                    )}

                    {/* D.G.Shipping Section */}
                    {activeTab === 'dg-shipping' && (
                        <div className="content-section updates-section">
                            <div className="section-header">
                                <h2>D.G. Shipping Updates</h2>
                                <p>Latest directives from the Directorate General of Shipping</p>
                            </div>
                            <div className="updates-list">
                                {dgShippingUpdates.map((update) => (
                                    <div key={update.id} className="update-card">
                                        <div className="update-badge">DGS</div>
                                        <div className="update-content">
                                            <h3>{update.title}</h3>
                                            <p>{update.description}</p>
                                            <p className="update-date">{formatDate(update.date)}</p>
                                        </div>
                                        <button className="update-link">Read More →</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* IMO Section */}
                    {activeTab === 'imo' && (
                        <div className="content-section updates-section">
                            <div className="section-header">
                                <h2>IMO Updates</h2>
                                <p>International Maritime Organization regulations and guidelines</p>
                            </div>
                            <div className="updates-list">
                                {imoUpdates.map((update) => (
                                    <div key={update.id} className="update-card">
                                        <div className="update-badge imo-badge">IMO</div>
                                        <div className="update-content">
                                            <h3>{update.title}</h3>
                                            <p>{update.description}</p>
                                            <p className="update-date">{formatDate(update.date)}</p>
                                        </div>
                                        <button className="update-link">Read More →</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Women at Sea Section */}
                    {activeTab === 'women' && (
                        <div className="content-section women-section">
                            <div className="section-header">
                                <h2>Empowering Women at Sea</h2>
                                <p>Inspiring stories of women in maritime careers</p>
                            </div>
                            <div className="women-grid">
                                {womenAtSea.map((woman) => (
                                    <div key={woman.id} className="woman-card">
                                        <div className="woman-avatar">{woman.image_placeholder}</div>
                                        <div className="woman-info">
                                            <h3 className="woman-name">{woman.name}</h3>
                                            <p className="woman-designation">{woman.designation}</p>
                                            <p className="woman-achievement">{woman.achievement}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
}
