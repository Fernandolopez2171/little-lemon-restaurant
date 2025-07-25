import { Container, Row, Col, Card } from "react-bootstrap";
import ChefImage from "../../../assets/restaurant-chef-B.jpg";
import "./About.css";
const ABOUT_CONFIG = {
  title: "Little Lemon Story",
  location: "Chicago",
  description:
    "Our story began over a decade ago with a simple dream: to bring authentic Mediterranean flavors to the heart of Chicago. Since then, we have been the favorite gathering place for families and friends seeking an exceptional culinary experience.",
  mission:
    "At Little Lemon, every dish tells a story. We use fresh ingredients and traditional recipes passed down through generations, creating unforgettable moments around our table.",
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "500+", label: "Authentic recipes" },
    { value: "1M+", label: "Meals served" },
  ],
};

const StatItem = ({ value, label }) => (
  <Col xs={4} className="text-center">
    <div>
      <h4 className="fw-bold text-dark mb-1">{value}</h4>
      <p className="small text-dark mb-0">{label}</p>
    </div>
  </Col>
);

const AboutContent = () => (
  <div>
    <header className="mb-4 text-center text-lg-start">
      <h2 id="about-title" className="display-4 fw-bold text-warning mb-3">
        {ABOUT_CONFIG.title}
      </h2>
      <p className="h5 mb-4 text-muted fst-italic">
        📍 {ABOUT_CONFIG.location}
      </p>
    </header>

    <Card className="border-0 mb-4 shadow rounded-4 bg-white bg-opacity-90">
      <Card.Body className="p-4">
        <p className="lead text-dark mb-3" style={{ lineHeight: "1.7" }}>
          {ABOUT_CONFIG.description}
        </p>
        <p className="text-dark mb-0 fst-italic">{ABOUT_CONFIG.mission}</p>
      </Card.Body>
    </Card>

    <Card className="border-0 bg-warning shadow-sm rounded-4">
      <Card.Body className="p-4">
        <Row>
          {ABOUT_CONFIG.stats.map((stat, index) => (
            <StatItem
              key={`stat-${index}`}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  </div>
);

const AboutImage = () => (
  <div>
    <Card className="border-0 shadow-lg rounded-4">
      <Card.Img
        src={ChefImage}
        alt="Our chef preparing Mediterranean specialties"
        className="rounded-4"
        loading="lazy"
        style={{ height: "580px", objectFit: "cover" }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-4" />
      <Card.ImgOverlay className="d-flex align-items-end">
        <div className="text-white">
          <h5 className="fw-bold mb-1">Our Chef</h5>
          <p className="small mb-0">Creating unique experiences</p>
        </div>
      </Card.ImgOverlay>
    </Card>
  </div>
);

const About = () => (
  <section
    className="py-5 bg-light"
    aria-labelledby="about-title"
    aria-label="About Little Lemon"
  >
    <Container>
      <Row className="align-items-stretch g-4">
        <Col lg={6}>
          <AboutContent />
        </Col>
        <Col lg={6}>
          <AboutImage />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
