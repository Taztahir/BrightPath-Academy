import './Testimonials.css';

// Parent Review Images
import sarahImg from '../assets/sarah.png';
import davidImg from '../assets/david.png';
import elenaImg from '../assets/elena.png';

// Student & Alumni Section Images
import BackgroundImg from '../assets/Background.png';
import marcusImg from '../assets/marcus.png';
import aishaImg from '../assets/aisha.png'; 

function Testimonials() {
  const parentReviews = [
    {
      id: 1,
      name: "Sarah Henderson",
      role: "PARENT, GRADE 4",
      quote: "The individual attention my son receives at BrightPath is unlike any other school. He has truly found his voice here.",
      image: sarahImg
    },
    {
      id: 2,
      name: "David Chen",
      role: "PARENT, GRADE 2",
      quote: "We were looking for a community, not just a curriculum. BrightPath delivered both beyond our expectations.",
      image: davidImg
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "ALUMNI PARENT",
      quote: "Both my daughters graduated from BrightPath. The foundation they received here made their college transition seamless.",
      image: elenaImg
    }
  ];

  return (
    <div className="testimonials-page">
      {/* 1. HERO SECTION */}
      <section className="testimonials-hero-section">
        <div className="hero-content">
          <h1>Voices of Our Community</h1>
          <p>Hear from the families and students who make BrightPath Academy a place of growth and inspiration.</p>
          <div className="hero-actions">
            <button className="btn-primary">Watch Video Stories</button>
            <button className="btn-secondary">Share Your Story</button>
          </div>
        </div>
      </section>

      {/* 2. FAMILY PERSPECTIVES SECTION */}
      <section className="parent-reviews-section">
        <div className="section-container">
          <div className="section-header-row">
            <div className="header-left">
              <span className="sub-badge">FAMILY PERSPECTIVES</span>
              <h2>From Our Parents</h2>
            </div>
            <div className="header-right">
              <p className="section-desc">
                The transition to our school community through the eyes of those who care most for our students.
              </p>
            </div>
          </div>

          <div className="reviews-grid">
            {parentReviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img src={review.image} alt={review.name} className="review-avatar" />
                  <div>
                    <h3>{review.name}</h3>
                    <span className="review-role">{review.role}</span>
                  </div>
                </div>
                <p className="review-quote">"{review.quote}"</p>
                {/* Wrapped individual characters to capture styling rules perfectly */}
                <div className="review-stars-container">
                  <span className="star-item">★</span>
                  <span className="star-item">★</span>
                  <span className="star-item">★</span>
                  <span className="star-item">★</span>
                  <span className="star-item">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FUTURE LEADERS SECTION */}
      <section className="alumni-section">
        <div className="alumni-main-container">
          <div className="alumni-header">
            <span className="alumni-badge">FUTURE LEADERS</span>
            <h2>Student & Alumni Experiences</h2>
            <div className="alumni-header-line"></div>
          </div>

          <div className="alumni-layout">
            <div className="alumni-image-wrapper">
              <img src={BackgroundImg} alt="Students collaborating" className="alumni-main-img" />
              <span className="img-tag">Class of 2023</span>
            </div>

            <div className="alumni-cards-stack">
              {/* Marcus Card */}
              <div className="alumni-card card-gold">
                <p className="alumni-quote">
                  "At BrightPath, I wasn't just a student ID number. I was a scientist, an artist, and a leader. The teachers here pushed me to explore interests I didn't even know I had."
                </p>
                <div className="alumni-profile">
                  <img src={marcusImg} alt="Marcus Thompson" className="alumni-avatar" />
                  <div>
                    <h3>Marcus Thompson</h3>
                    <span className="alumni-role">ALUMNI, STANFORD UNIVERSITY '27</span>
                  </div>
                </div>
              </div>

              {/* Aisha Card */}
              <div className="alumni-card card-figma-cream">
                <p className="alumni-quote">
                  "The community at BrightPath taught me that collaboration is the key to innovation. Every project felt like a real-world challenge."
                </p>
                <div className="alumni-profile">
                  <img src={aishaImg} alt="Aisha Patel" className="alumni-avatar" />
                  <div>
                    <h3>Aisha Patel</h3>
                    <span className="alumni-role">CURRENT SENIOR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;