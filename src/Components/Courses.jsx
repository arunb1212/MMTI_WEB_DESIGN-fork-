import { useNavigate } from "react-router-dom";
import "./Courses.css";
import { useState } from "react";

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: "Basic Safety Training",
      duration: "2 Days",
      level: "Foundation",
      type: "Modular Courses",
      description:
        "Essential safety procedures and emergency protocols for maritime professionals.",
      highlights: ["Fire Safety", "First Aid", "Survival Techniques"],
    },
    {
      id: 2,
      title: "Second Mate (FG)",
      duration: "5 Months",
      level: "Professional",
      type: "Competency Courses",
      description:
        "Comprehensive training for Second Officer certification and competency.",
      highlights: ["Navigation", "Seamanship", "Cargo Operations"],
    },
    {
      id: 3,
      title: "Chief Mate Phase 1 & 2",
      duration: "6 Months",
      level: "Advanced",
      type: "Competency Courses",
      description:
        "Executive-level training for Chief Officer positions on commercial vessels.",
      highlights: [
        "Leadership",
        "Ship Management",
        "International Regulations",
      ],
    },
    {
      id: 4,
      title: "Advanced Safety Management",
      duration: "3 Days",
      level: "Professional",
      type: "Refresher's Courses",
      description:
        "Advanced safety protocols and incident management for maritime leaders.",
      highlights: [
        "Risk Assessment",
        "Crisis Management",
        "Safety Documentation",
      ],
    },
    {
      id: 5,
      title: "NWKO (NCV)",
      duration: "2 Months",
      level: "Foundation",
      type: "Package Courses",
      description:
        "National Voyage Knowledge course for aspiring maritime officers.",
      highlights: ["Navigation Skills", "Deck Operations", "Safety Procedures"],
    },
    {
      id: 6,
      title: "Tanker Training",
      duration: "1 Week",
      level: "Specialized",
      type: "Simulator Courses",
      description:
        "Specialized training for tanker vessel operations and regulations.",
      highlights: [
        "Hazmat Procedures",
        "Cargo Safety",
        "Environmental Protection",
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

  const filteredCourses =
    activeFilter === "All"
      ? courses
      : courses.filter((course) => course.type === activeFilter);

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
          <div className="filter-buttons">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <span className="course-level">{course.level}</span>
                  <span className="course-duration">⏱️ {course.duration}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <p className="course-type">{course.type}</p>
                <p className="course-description">{course.description}</p>

                <div className="course-highlights">
                  <h4>Key Topics:</h4>
                  <ul>
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate("/enroll")}
                  className="course-btn"
                >
                  Enroll Now
                </button>
              </div>
            ))
          ) : (
            <div className="no-courses">
              No courses available for this filter.
            </div>
          )}
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
