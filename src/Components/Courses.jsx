import { useNavigate } from "react-router-dom";
import "./Courses.css";
import { useState } from "react";

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const courses = [
    
    {
      id: 2,
      title: "Modular Courses",
      description:
        "Short-duration courses focusing on essential safety and operational skills.",
      highlights: ["Basic Safety Training (fire safety, first aid, survival techniques).", "Mandatory for all seafarers before joining ships.", "Typically 2–5 days, highly practical and hands-on"],
    },
    {
      id: 3,
      title: "Package Courses",
      description:
        " Bundled training programs combining multiple modules for efficiency.",
      highlights: [
        "Designed for cadets and officers preparing for competency exams",
        "Includes safety, navigation, and simulator training in one package.",
        "Cost-effective compared to booking individual courses",
        "Special discounts"
      ],
    },
    {
      id: 4,
      title: "Refresher's Courses",
      description:
        "Short courses to update skills and comply with revalidation requirements.",
      highlights: [
        "Ideal for mariners returning to sea after a break",
        "Covers updated IMO conventions, safety drills, and emergency procedures.",
        "Ensures compliance with latest DG Shipping and STCW amendments.",
      ],
    },
    {
      id: 5,
      title: "Competency Courses",
      description:
        " Long-duration, exam-oriented courses for professional certification.",
      highlights: ["Prepares candidates for MMD exams and higher ranks.", "Chief Mate Phase I & II ", "etc."],
    },
    {
      id: 6,
      title: "Simulator Courses",
      description:
        "Advanced training using ship simulators for real-world scenarios.",
      highlights: [
        "ARPA and RANSCO ",
        "Bridge resource management and cargo handling simulations",
        "Builds confidence in handling emergencies and complex navigation situations",
      ],
    },
  ];

  const filterOptions = [
    "All",
    "Modular Courses",
    "Package Courses",
    "Refresher's Courses",
    "Competency Courses",
    "Simulator Courses",
  ];

  const handleFilterClick = (filter) => {
    const urlMap = {
      "Modular Courses": 1,
      "Package Courses": 4,
      "Refresher's Courses": 5,
      "Competency Courses": 6,
      "Simulator Courses": 7,
    };

    if (filter === "All") {
      setActiveFilter(filter);
    } else if (urlMap[filter]) {
      window.location.href = `http://mmti.co.in/courses.aspx?Id=${urlMap[filter]}`;
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <section id="courses" className="courses">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="section-title">Our Courses</h2>
          <div className="section-accent"></div>
          <p className="section-subtitle">
            Comprehensive maritime training programs designed to meet
            international standards
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-section">
          <h3 className="filter-title">Filter by Course Type</h3>
          {/* <div className="filter-buttons">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div> */}
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-card ${activeFilter === course.title ? "active" : ""}`}
            >
              

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleFilterClick(course.title)}
                className="course-btn"
              >
                View Course list ➔
              </button>
            </div>
          ))}
        </div>

        <div className="courses-cta">
          <h3>Ready to start your maritime career?</h3>
          <p>
            Book your seat today and join thousands of successful MMTI alumni
          </p>
          <a onClick={() => navigate("/enroll")} className="cta-btn">
            Book Your Seat
          </a>
        </div>
      </div>
      
    </section>
  );
}
