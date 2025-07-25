import { Container, Row, Col, Card } from "react-bootstrap";
import UserOne from "../../../assets/user-1.png";
import UserTwo from "../../../assets/user-2.png";
import UserThree from "../../../assets/user-3.png";
import UserFour from "../../../assets/user-4.png";
import "./Testimonials.css";

const TESTIMONIALS_CONFIG = {
  title: "What Our Customers Say",
  subtitle: "Real experiences from Mediterranean food lovers",
  testimonials: [
    {
      id: 1,
      name: "Kaitlyn",
      location: "Chicago, IL",
      rating: 5,
      review:
        "So yummy! The food here is fantastic and the service was great. My favorite shawarma I've had in the valley! The atmosphere is cozy and perfect for date nights.",
      image: UserOne,
      verified: true,
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Shivaya",
      location: "Downtown Chicago",
      rating: 5,
      review:
        "Absolute YUM! Delicious fresh quality ingredients. We were surprised how good it was! The Mediterranean flavors are authentic and the portions are generous.",
      image: UserTwo,
      verified: true,
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Sri",
      location: "Lincoln Park",
      rating: 5,
      review:
        "The best amazing lunch special. Really tasty and filling. Definitely try the lunch special. The staff is friendly and the ambiance is perfect for business meetings.",
      image: UserThree,
      verified: true,
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "William",
      location: "River North",
      rating: 5,
      review:
        "Reasonably priced, good portions, fresh, fast service, and includes lots of fresh whole foods. Pretty much the perfect restaurant. Highly recommend the Greek salad!",
      image: UserFour,
      verified: true,
      date: "1 week ago",
    },
  ],
};

const TestimonialCard = ({ testimonial, index }) => (
  <Col lg={6} className="mb-4">
    <Card
      className={`testimonial-card border-0 shadow-lg h-100 rounded-4 bg-white bg-opacity-95 transition-all`}
    >
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-3 pb-3 border-bottom border-warning border-opacity-25">
          <div className="position-relative me-3">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="rounded-circle border border-warning border-3"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            {testimonial.verified && (
              <span
                className="position-absolute bottom-0 end-0 badge bg-success rounded-circle p-1"
                style={{ fontSize: "10px" }}
              >
                ✓
              </span>
            )}
          </div>

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="fw-bold mb-1 text-dark">{testimonial.name}</h5>
                <p className="text-muted small mb-0">
                  📍 {testimonial.location}
                </p>
              </div>
              <div className="text-end">
                <div className="mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-muted small mb-0">{testimonial.date}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <blockquote className="mb-0 ps-4 position-relative">
            <p className="text-dark mb-0 fst-italic lh-base">
              "{testimonial.review}"
            </p>
            <span
              className="position-absolute start-0 top-0 text-warning opacity-75"
              style={{
                fontSize: "3rem",
                lineHeight: "1",
                fontFamily: "Georgia, serif",
                marginTop: "-10px",
              }}
            >
              "
            </span>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

const TestimonialsHeader = () => (
  <div className="text-center mb-5">
    <header className="mb-4">
      <h2
        id="testimonials-title"
        className="display-4 fw-bold text-warning mb-3"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        {TESTIMONIALS_CONFIG.title}
      </h2>
      <p className="h5 text-muted mb-4 fst-italic opacity-75">
        {TESTIMONIALS_CONFIG.subtitle}
      </p>
    </header>
  </div>
);

const Testimonials = () => (
  <section
    className="py-5 position-relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      zIndex: 2,
    }}
    aria-labelledby="testimonials-title"
    aria-label="Customer Testimonials"
  >
    <Container className="position-relative">
      <TestimonialsHeader />

      <Row className="g-4 justify-content-center">
        {TESTIMONIALS_CONFIG.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </Row>

      <div className="text-center mt-4">
        <Card className="border-warning border-2 shadow-sm d-inline-block bg-white bg-opacity-75 backdrop-blur">
          <Card.Body className="p-4">
            <p className="text-dark mb-3">
              <strong>🌟 Love our food?</strong>
              <br />
              Share your experience and join our family of satisfied customers!
            </p>
            <button
              className="btn btn-warning fw-bold px-4 py-2 rounded-pill text-uppercase"
              style={{ letterSpacing: "1px" }}
              aria-label="Leave a review"
              onClick={() => console.log("Navigate to review form")}
            >
              📝 Leave a Review
            </button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  </section>
);

export default Testimonials;
