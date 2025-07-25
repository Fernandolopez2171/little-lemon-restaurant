import React, { useCallback, memo, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import HeroImage from "../../assets/restaurant-food.jpg";
import { useModals } from "../../hooks/useModals";
import { useForm } from "../../hooks/useForm";
import {
  ReservationFormModal,
  ConfirmationModal,
  FinalConfirmationModal,
} from "../../components/modals/ReservationModals";
import "../../components/modals/ReservationModals.css";
import "./Hero.css";

const RESTAURANT_INFO = {
  name: "Little Lemon",
  location: "Chicago",
  description:
    "Experience authentic Mediterranean cuisine in the heart of Chicago. Fresh ingredients, traditional recipes, and a warm atmosphere await you at Little Lemon.",
  imageAlt: "Delicious Mediterranean food at Little Lemon",
};

const HeroContent = memo(({ onReserveClick }) => (
  <div className="content-modern">
    <header className="mb-4">
      <h1 className="title-primary display-3 fw-bold text-warning mb-2 text-shadow-dark">
        {RESTAURANT_INFO.name}
      </h1>
      <p className="hero-location-standard location-standard h4 mb-3 text-shadow-dark">
        📍 {RESTAURANT_INFO.location}
      </p>
    </header>

    <Card className="card-modern backdrop-blur border-0 mb-4">
      <Card.Body className="p-4">
        <p className="lead-content-standard text-dark mb-0">
          {RESTAURANT_INFO.description}
        </p>
      </Card.Body>
    </Card>

    <Button
      variant="warning"
      size="lg"
      className="fw-bold px-5 py-3 shadow-lg hero-cta-btn btn-modern"
      onClick={onReserveClick}
      aria-label="Open reservation form"
    >
      📅 Reserve a Table
    </Button>
  </div>
));

HeroContent.displayName = "HeroContent";

const HeroImageSection = memo(() => (
  <div className="images-container-modern">
    <Card className="border-0 shadow-lg hero-image-card card-modern">
      <Card.Img
        src={HeroImage}
        alt={RESTAURANT_INFO.imageAlt}
        className="hero-image-modern rounded"
        loading="lazy"
        decoding="async"
      />
    </Card>
  </div>
));

HeroImageSection.displayName = "HeroImageSection";

const Hero = () => {
  const { modals, toggleModal } = useModals({
    reservationForm: false,
    confirmation: false,
    finalConfirmation: false,
  });

  const validationRules = {
    fullName: (value) => value && value.trim().length >= 2,
    email: (value) => value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => value && value.trim().length >= 10,
    date: (value) => {
      if (!value) return false;
      const selectedDate = new Date(value + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !isNaN(selectedDate.getTime()) && selectedDate >= today;
    },
    time: (value) => value && value.trim().length > 0,
    guests: (value) => value && parseInt(value) >= 1,
  };

  const {
    values: formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      date: new Date().toISOString().split("T")[0],
      time: "",
      guests: "",
      occasion: "",
      specialRequests: "",
    },
    validationRules
  );

  const [reservationNumber, setReservationNumber] = useState("");

  const handleReserveClick = useCallback(() => {
    toggleModal("reservationForm", true);
  }, [toggleModal]);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateForm()) {
        toggleModal("reservationForm", false);
        toggleModal("confirmation", true);
      }
    },
    [validateForm, toggleModal]
  );

  const handleConfirmReservation = useCallback(() => {
    const reservationNum = `LL${Date.now().toString().slice(-6)}`;
    setReservationNumber(reservationNum);

    toggleModal("confirmation", false);
    toggleModal("finalConfirmation", true);
  }, [toggleModal]);

  const handleBackToForm = useCallback(() => {
    toggleModal("confirmation", false);
    toggleModal("reservationForm", true);
  }, [toggleModal]);

  const handleCloseAllModals = useCallback(() => {
    toggleModal("reservationForm", false);
    toggleModal("confirmation", false);
    toggleModal("finalConfirmation", false);
    resetForm();
  }, [toggleModal, resetForm]);

  return (
    <>
      <section
        className="hero-section-modern py-5"
        role="banner"
        aria-labelledby="hero-title"
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <HeroContent onReserveClick={handleReserveClick} />
            </Col>

            <Col lg={6}>
              <HeroImageSection />
            </Col>
          </Row>
        </Container>
      </section>

      <ReservationFormModal
        show={modals.reservationForm}
        onHide={handleCloseAllModals}
        formData={formData}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        onSubmit={handleFormSubmit}
      />

      <ConfirmationModal
        show={modals.confirmation}
        onHide={handleCloseAllModals}
        formData={formData}
        onConfirm={handleConfirmReservation}
        onBack={handleBackToForm}
      />

      <FinalConfirmationModal
        show={modals.finalConfirmation}
        onHide={handleCloseAllModals}
        reservationNumber={reservationNumber}
      />
    </>
  );
};

export default Hero;
