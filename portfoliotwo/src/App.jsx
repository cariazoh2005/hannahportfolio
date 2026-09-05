import "./App.css";

function App() {
  const subjects = [
    {
      code: "IT 101",
      name: "Introduction to Computing",
      description:
        "Fundamentals of computers, information technology, and digital systems.",
    },
    {
      code: "IT 102",
      name: "Programming",
      description:
        "Basic programming concepts, problem solving, and application development.",
    },
    {
      code: "WEB 101",
      name: "Web Development",
      description:
        "Creating modern and responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      code: "DB 101",
      name: "Database Management",
      description:
        "Introduction to databases, SQL, data organization, and management.",
    },
    {
      code: "NET 101",
      name: "Computer Networking",
      description:
        "Basic networking concepts, devices, protocols, and communication.",
    },
    {
      code: "PE 101",
      name: "Physical Education",
      description:
        "Physical fitness, wellness, sports, and healthy lifestyle activities.",
    },
  ];

  return (
    <div className="portfolio">
      {/* PLANET */}
      <div className="planet"></div>

      <div className="stars">
        <span className="shooting-star star1"></span>
        <span className="shooting-star star2"></span>
        <span className="shooting-star star3"></span>
        <span className="shooting-star star4"></span>
        <span className="shooting-star star5"></span>
      </div>

      {/* SHOOTING STARS */}
      <div className="stars"></div>

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="nav-container">
          <a href="#home" className="logo">
            My<span>Portfolio</span>
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#profile">Profile</a>
            <a href="#subjects">Subjects</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hello, I'm <span>Precious</span>
            </h1>

            <h2>BSIT Student</h2>

            <p className="hero-description">
              I am a Bachelor of Science in Information Technology student
              passionate about technology, programming, web development, and
              learning new skills.
            </p>

            <div className="hero-buttons">
              <a href="#profile" className="primary-btn">
                View Profile
              </a>

              <a href="#subjects" className="secondary-btn">
                My Subjects
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-circle">P</div>

            <h3>Precious</h3>
            <p>BSIT Student</p>

            <div className="student-info-card">
              <div>
                <strong>Course</strong>
                <span>BSIT</span>
              </div>

              <div>
                <strong>Year Level</strong>
                <span>3rd Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section id="profile" className="section profile-section">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>
            My <span>Profile</span>
          </h2>
        </div>

        <div className="profile-content">
          <div className="profile-image">
            <div className="profile-placeholder">P</div>
          </div>

          <div className="profile-details">
            <h3>Personal Information</h3>

            <div className="info-grid">
              <div className="info-box">
                <span>Name</span>
                <strong>Precious</strong>
              </div>

              <div className="info-box">
                <span>Course</span>
                <strong>BSIT</strong>
              </div>

              <div className="info-box">
                <span>Year Level</span>
                <strong>3rd Year</strong>
              </div>

              <div className="info-box">
                <span>Birthday</span>
                <strong>October 20, 2005</strong>
              </div>

              <div className="info-box">
                <span>Address</span>
                <strong>San Manuel</strong>
              </div>

              <div className="info-box">
                <span>Status</span>
                <strong>Currently Studying</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUBJECTS ================= */}
      <section id="subjects" className="section subjects-section">
        <div className="section-title">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>
            My <span>Subjects</span>
          </h2>
        </div>

        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div className="subject-card" key={index}>
              <div className="subject-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="subject-code">{subject.code}</div>

              <h3>{subject.name}</h3>

              <p>{subject.description}</p>

              <div className="subject-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <div className="section-title">
          <p>WHO I AM</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>My Journey in Information Technology</h3>

            <p>
              I am currently pursuing a Bachelor of Science in Information
              Technology. My journey in IT has helped me develop my skills in
              programming, web development, databases, and computer
              technologies.
            </p>

            <p>
              I enjoy creating websites and applications that are simple,
              useful, and visually appealing. I am continuously learning new
              technologies and improving my skills as an IT student.
            </p>

            <p>
              My goal is to become a skilled IT professional and use technology
              to create solutions that can help people and communities.
            </p>
          </div>

          <div className="skills-card">
            <h3>My Skills</h3>

            <div className="skill">
              <div>
                <span>HTML & CSS</span>
                <strong>85%</strong>
              </div>
              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>JavaScript</span>
                <strong>75%</strong>
              </div>
              <div className="skill-bar">
                <span style={{ width: "75%" }}></span>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>React</span>
                <strong>70%</strong>
              </div>
              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>Database</span>
                <strong>70%</strong>
              </div>
              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <a href="#home" className="footer-logo">
              My<span>Portfolio</span>
            </a>

            <p>BSIT Student Portfolio</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#profile">Profile</a>
            <a href="#subjects">Subjects</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div className="copyright">© 2026 Precious. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
