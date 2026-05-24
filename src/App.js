import { useState, useEffect } from "react";
import './App.css';

/* ── DATA ── */
const examCategories = [
  {
    icon: "⚙️", cat: "Engineering",
    title: "Engineering Entrance & Competitive",
    exams: ["GATE", "PGECET", "ECET", "JEE", "EMCET", "POLYCET"]
  },
  {
    icon: "⚖️", cat: "Law",
    title: "Law Entrance Exams",
    exams: ["LAWCET", "CLAT"]
  },
  {
    icon: "📊", cat: "Management",
    title: "MBA & Management Entrance",
    exams: ["CAT", "ICET"]
  },
  {
    icon: "🎓", cat: "Intermediate",
    title: "Intermediate Level",
    exams: ["JEE (Intermediate)", "EMCET (Intermediate)"]
  },
  {
    icon: "🔧", cat: "Diploma",
    title: "Diploma Level",
    exams: ["POLYCET"]
  },
  {
    icon: "🏫", cat: "School",
    title: "School Entrance Exams",
    exams: ["Navodaya", "Sainik School", "RMS", "Gurukul", "Modal Schools"]
  },
  {
    icon: "🏛️", cat: "Government Jobs",
    title: "Government & Public Sector",
    exams: ["Groups", "RRB", "Banks", "ESE", "AEE", "AE"]
  }
];

const subjects = [
  { icon: "∫", label: "Calculus & Integration" },
  { icon: "📐", label: "Trigonometry" },
  { icon: "∑", label: "Algebra & Series" },
  { icon: "📈", label: "Coordinate Geometry" },
  { icon: "🔢", label: "Number Theory" },
  { icon: "📊", label: "Statistics & Probability" },
  { icon: "🔣", label: "Differential Equations" },
  { icon: "🧮", label: "Matrices & Determinants" },
  { icon: "🔁", label: "Sequences & Series" },
  { icon: "🎯", label: "Vectors & 3D Geometry" },
  { icon: "📏", label: "Mensuration" },
  { icon: "🧠", label: "Reasoning & Aptitude" },
];

const features = [
  { icon: "🎯", title: "Exam-Focused Teaching", desc: "Every topic is taught with the exam pattern in mind — shortcuts, tricks, and high-weightage areas get special focus." },
  { icon: "📝", title: "Custom Study Plans", desc: "Personalized roadmaps for each student based on their current level, target exam, and available time." },
  { icon: "💻", title: "Virtual & Offline Classes", desc: "Attend from anywhere via online sessions, or meet in-person in Hyderabad. Fully flexible scheduling." },
  { icon: "📚", title: "Comprehensive Material", desc: "Curated notes, previous year papers, practice sets, and mock tests for every exam category covered." },
  { icon: "⚡", title: "8+ Years Experience", desc: "Proven track record with hundreds of students clearing GATE, JEE, EMCET, and various government exams." },
  { icon: "🏆", title: "GATE Qualified Mentor", desc: "As a GATE qualifier and current Law student, Purna brings both academic depth and practical insight." },
];

const stats = [
  { num: "8+", label: "Years Teaching" },
  { num: "500+", label: "Students Guided" },
  { num: "15+", label: "Exams Covered" },
  { num: "100%", label: "Dedication" },
];

/* ── NAVBAR ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#exams", label: "Exams" },
    { href: "#subjects", label: "Subjects" },
    { href: "#why", label: "Why Me" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a className="nav-logo" href="#hero" style={{ fontWeight: "bold", fontSize: "25px" }}>
          <span className="nav-logo-dot" />
          <span style={{color:"red"}}>Purna</span>Chander
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={l.href === "#contact" ? "nav-cta" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-grid">
        <div>
          <div className="hero-badge animate-fade-up">
            <span className="hero-badge-dot" />
            Available for Enrolment
          </div>
          <h1 className="hero-name animate-fade-up delay-1">
            Purna<br /><em>Chander</em>
          </h1>
          <p className="hero-title animate-fade-up delay-2">
            Professional Mathematics Tutor
          </p>
          <p className="hero-desc animate-fade-up delay-3">
            GATE Qualified educator with 8+ years of experience helping students crack
            competitive exams — from JEE & GATE to LAWCET & Government jobs.
          </p>
          <div className="hero-tags animate-fade-up delay-4">
            <span className="hero-tag">📍 Hyderabad</span>
            <span className="hero-tag">🏠 Native: Warangal</span>
            <span className="hero-tag">💻 Virtual Classes</span>
            <span className="hero-tag">⚖️ Pursuing LLB</span>
          </div>
          <div className="hero-actions animate-fade-up delay-5">
            <a href="#contact" className="btn-primary">
              Book a Session →
            </a>
            <a href="#exams" className="btn-outline">
              View Exams
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-up delay-3">
          <div className="hero-card">
            <div className="hero-card-label">Quick Profile</div>
            {[
              { num: "8+", label: "Years of Experience", sub: "Full-time Professional Tutor" },
              { num: "15+", label: "Exam Categories", sub: "Engineering, Law, MBA, School & more" },
              { num: "GATE", label: "Qualified", sub: "Mathematics — All India Competitive" },
              { num: "LLB", label: "Currently Pursuing", sub: "Law — Osmania University" },
            ].map((s, i) => (
              <div key={i} className="stat-row">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">
                  <strong>{s.label}</strong>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT ── */
function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">Passion for Teaching,<br />Proven Results</h2>
        <div className="about-grid">
          <div className="about-content">
            <p>
              I am <strong>Purna Chander</strong>, a full-time professional tutor based in
              Hyderabad with roots in Warangal, Telangana. My academic journey — qualifying
              GATE and currently pursuing LLB — gives me both the mathematical rigour and
              analytical depth needed to guide students across diverse competitive exams.
            </p>
            <p>
              With over <strong>8 years of teaching experience</strong>, I have helped hundreds
              of students achieve their goals — be it cracking GATE, securing seats in engineering
              colleges, or clearing government recruitment exams. My approach focuses on building
              strong conceptual foundations while simultaneously developing speed and accuracy.
            </p>
            <div className="about-highlight">
              <div className="about-highlight-icon">💡</div>
              <p>
                "I don't just teach formulas — I build the <em>thinking</em> required to solve
                any problem, under any exam pressure."
              </p>
            </div>
            <p>
              I offer both in-person sessions in Hyderabad and virtual classes for students
              across India. Whether you are a school student preparing for Navodaya or an
              engineering graduate targeting GATE, I craft a personalized plan for you.
            </p>
          </div>

          <div className="credentials">
            {[
              { icon: "🎓", title: "GATE Qualified", sub: "Mathematics — National Level Competitive Exam" },
              { icon: "⚖️", title: "Pursuing LLB", sub: "Law — Building Cross-Domain Expertise" },
              { icon: "📍", title: "Based in Hyderabad", sub: "Native: Warangal, Telangana" },
              { icon: "🏫", title: "Full-Time Tutor", sub: "8+ Years | 500+ Students Mentored" },
              { icon: "💻", title: "Virtual Classes Available", sub: "Online sessions via Zoom / Google Meet" },
              { icon: "🧮", title: "Maths Specialist", sub: "Engineering & Competitive Exam Mathematics" },
            ].map((c, i) => (
              <div key={i} className="credential-card">
                <div className="credential-icon">{c.icon}</div>
                <div>
                  <div className="credential-title">{c.title}</div>
                  <div className="credential-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EXAMS ── */
function Exams() {
  return (
    <section className="section exams-section" id="exams">
      <div className="section-inner">
        <div className="section-tag" style={{ color: "var(--gold)" }}>Exam Coverage</div>
        <h2 className="section-title">Every Exam,<br />One Tutor</h2>
        <p className="section-sub">
          From school entrance exams to national-level engineering & law entrances —
          comprehensive preparation across all major competitive exams.
        </p>
        <div className="exams-grid">
          {examCategories.map((cat, i) => (
            <div key={i} className="exam-card">
              <div className="exam-card-header">
                <div className="exam-card-icon">{cat.icon}</div>
                <div className="exam-card-cat">{cat.cat}</div>
              </div>
              <div className="exam-card-title">{cat.title}</div>
              <div className="exam-tags">
                {cat.exams.map((e, j) => (
                  <span key={j} className="exam-tag">{e}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SUBJECTS ── */
function Subjects() {
  return (
    <section className="section" id="subjects">
      <div className="section-inner">
        <div className="section-tag">Subjects Taught</div>
        <h2 className="section-title">Mathematics,<br />Inside Out</h2>
        <p className="section-sub">
          From foundational arithmetic to advanced calculus and discrete mathematics —
          every topic taught with clarity and exam-readiness.
        </p>
        <div className="subjects-grid">
          {subjects.map((s, i) => (
            <div key={i} className="subject-pill">
              <span className="subject-pill-icon">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── STATS STRIP ── */
function Stats() {
  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-number">
              {s.num}
            </div>
            <div className="stat-desc">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── WHY ME ── */
function WhyMe() {
  return (
    <section className="section features-section" id="why">
      <div className="section-inner">
        <div className="section-tag">Why Choose Me</div>
        <h2 className="section-title">Teaching That<br />Gets Results</h2>
        <p className="section-sub">
          Experience, dedication, and a proven methodology that adapts to every student's
          unique learning pace and goal.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon-wrap">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── MODE / LOCATION ── */
function TeachingMode() {
  return (
    <section className="section" id="location">
      <div className="section-inner">
        <div className="section-tag">Teaching Modes</div>
        <h2 className="section-title">Learn From Anywhere</h2>
        <p className="section-sub">
          Offline classes in Hyderabad, or virtual sessions across India —
          flexible scheduling to suit your routine.
        </p>
        <div className="mode-grid">
          <div className="mode-card offline">
            <div className="mode-card-icon">📍</div>
            <div className="mode-card-title">Offline Classes</div>
            <p className="mode-card-desc">
              In-person sessions available in Hyderabad. Face-to-face interaction,
              whiteboard sessions, and printed study material. Ideal for students
              who prefer a classroom environment.
            </p>
            <div className="mode-pills">
              <span className="mode-pill">📍 Hyderabad</span>
              <span className="mode-pill">🕐 Flexible Timing</span>
              <span className="mode-pill">📋 Study Material</span>
            </div>
          </div>
          <div className="mode-card online">
            <div className="mode-card-icon">💻</div>
            <div className="mode-card-title">Virtual Classes</div>
            <p className="mode-card-desc">
              Live one-on-one and batch sessions via Zoom / Google Meet. Digital
              whiteboards, session recordings, and online mock tests. Reach me
              from anywhere in India or abroad.
            </p>
            <div className="mode-pills">
              <span className="mode-pill">🌐 Pan-India</span>
              <span className="mode-pill">🎥 Recorded Sessions</span>
              <span className="mode-pill">📱 WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", exam: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to EmailJS / Formspree / backend
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <div className="section-tag" style={{ color: "var(--gold)" }}>Contact</div>
        <h2 className="section-title">Start Your<br />Journey Today</h2>
        <p className="section-sub">
          Reach out for a free counselling session. Let's discuss your goal and
          build a plan to get you there.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            {[
              { icon: "📍", label: "Location", val: "Hyderabad, Telangana\n(Native: Warangal)" },
              { icon: "📱", label: "Phone / WhatsApp", val: "+91 9441336202\n(Call or WhatsApp anytime)" },
              { icon: "✉️", label: "Email", val: "puri.chander17@gmail.com" },
              { icon: "🕐", label: "Available Hours", val: "Mon – Sat: 7 AM – 9 PM\nSunday: 9 AM – 6 PM" },
              { icon: "🌐", label: "Teaching Mode", val: "Offline (Hyderabad) &\nOnline (Pan-India)" },
            ].map((c, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-val" style={{ whiteSpace: "pre-line" }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <span>✅</span>
                Thank you! Your enquiry has been received.<br />
                Purna sir will get back to you within 24 hours.
              </div>
            ) : (
              <>
                <div className="form-title">Send an Enquiry</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX" required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Target Exam</label>
                    <select name="exam" value={form.exam} onChange={handleChange} required>
                      <option value="">Select your target exam…</option>
                      <optgroup label="Engineering">
                        <option>GATE</option><option>PGECET</option>
                        <option>ECET</option><option>JEE</option>
                        <option>EMCET</option><option>POLYCET</option>
                      </optgroup>
                      <optgroup label="Law">
                        <option>LAWCET</option><option>CLAT</option>
                      </optgroup>
                      <optgroup label="MBA">
                        <option>CAT</option><option>ICET</option>
                      </optgroup>
                      <optgroup label="School">
                        <option>Navodaya</option><option>Sainik School</option>
                        <option>RMS</option><option>Gurukul</option>
                      </optgroup>
                      <optgroup label="Government Jobs">
                        <option>Groups</option><option>RRB</option>
                        <option>Banks</option><option>ESE / AEE / AE</option>
                      </optgroup>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message (optional)</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your current level, study goals, preferred timing…"
                    />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Enquiry →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        © 2025 Purna Chander. Professional Tutor · Hyderabad, Telangana.
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#exams">Exams</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

/* ── APP ── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Exams />
      <Subjects />
      <Stats />
      <WhyMe />
      <TeachingMode />
      <Contact />
      <Footer />
    </>
  );
}
