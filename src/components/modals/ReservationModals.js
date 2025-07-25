import { Modal, Button, Form, Row, Col, Alert, Card } from 'react-bootstrap';

export const ReservationFormModal = ({ 
  show, 
  onHide, 
  formData, 
  errors, 
  touched, 
  onChange, 
  onBlur, 
  onSubmit 
}) => {
  const formatDate = (date) => {
    if (!date) return '';
    if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return date;
    }
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    return d.toISOString().split('T')[0];
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const timeOptions = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const occasionOptions = [
    'Birthday',
    'Anniversary',
    'Date Night',
    'Business Dinner',
    'Family Celebration',
    'Other'
  ];

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered
      backdrop="static"
    >
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title className="text-dark">
          🍋 Reserve Your Table
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Full Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your full name"
                  value={formData.fullName || ''}
                  onChange={(e) => onChange('fullName', e.target.value)}
                  onBlur={() => onBlur('fullName')}
                  isInvalid={touched.fullName && errors.fullName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Full name is required
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email || ''}
                  onChange={(e) => onChange('email', e.target.value)}
                  onBlur={() => onBlur('email')}
                  isInvalid={touched.email && errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Phone <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone || ''}
                  onChange={(e) => onChange('phone', e.target.value)}
                  onBlur={() => onBlur('phone')}
                  isInvalid={touched.phone && errors.phone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Phone number is required
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Date <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  min={getMinDate()}
                  value={formatDate(formData.date)}
                  onChange={(e) => onChange('date', e.target.value)}
                  onBlur={() => onBlur('date')}
                  isInvalid={touched.date && errors.date}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please select a valid date
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Time <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  value={formData.time || ''}
                  onChange={(e) => onChange('time', e.target.value)}
                  onBlur={() => onBlur('time')}
                  isInvalid={touched.time && errors.time}
                  required
                >
                  <option value="">Select a time</option>
                  {timeOptions.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a time
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Number of guests <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  value={formData.guests || ''}
                  onChange={(e) => onChange('guests', e.target.value)}
                  onBlur={() => onBlur('guests')}
                  isInvalid={touched.guests && errors.guests}
                  required
                >
                  <option value="">Select guests</option>
                  {guestOptions.map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select number of guests
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Occasion</Form.Label>
            <Form.Select
              value={formData.occasion || ''}
              onChange={(e) => onChange('occasion', e.target.value)}
            >
              <option value="">Select an occasion</option>
              {occasionOptions.map(occasion => (
                <option key={occasion} value={occasion}>{occasion}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Special requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Allergies, seating preferences, special occasion..."
              value={formData.specialRequests || ''}
              onChange={(e) => onChange('specialRequests', e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button 
          variant="warning" 
          onClick={onSubmit}
          className="fw-bold px-4"
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const ConfirmationModal = ({ 
  show, 
  onHide, 
  formData, 
  onConfirm, 
  onBack 
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString + 'T12:00:00');
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered
      backdrop="static"
    >
      <Modal.Header closeButton className="bg-info text-white">
        <Modal.Title>
          ✅ Confirm Reservation
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Alert variant="info" className="mb-4">
          <Alert.Heading className="h5">
            Please review your reservation details
          </Alert.Heading>
          <p className="mb-0">
            Make sure all information is correct before confirming.
          </p>
        </Alert>

        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-light">
            <h5 className="mb-0">📋 Reservation Details</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <strong>👤 Name:</strong>
                  <div className="text-muted">{formData.fullName}</div>
                </div>
                <div className="mb-3">
                  <strong>📧 Email:</strong>
                  <div className="text-muted">{formData.email}</div>
                </div>
                <div className="mb-3">
                  <strong>📱 Phone:</strong>
                  <div className="text-muted">{formData.phone}</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <strong>📅 Date:</strong>
                  <div className="text-muted">{formatDate(formData.date)}</div>
                </div>
                <div className="mb-3">
                  <strong>🕐 Time:</strong>
                  <div className="text-muted">{formData.time}</div>
                </div>
                <div className="mb-3">
                  <strong>👥 Guests:</strong>
                  <div className="text-muted">
                    {formData.guests} {formData.guests === '1' ? 'person' : 'people'}
                  </div>
                </div>
              </Col>
            </Row>

            {formData.occasion && (
              <div className="mb-3">
                <strong>🎉 Occasion:</strong>
                <div className="text-muted">{formData.occasion}</div>
              </div>
            )}

            {formData.specialRequests && (
              <div className="mb-3">
                <strong>📝 Special requests:</strong>
                <div className="text-muted">{formData.specialRequests}</div>
              </div>
            )}
          </Card.Body>
        </Card>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack}>
          ← Back to edit
        </Button>
        <Button 
          variant="success" 
          onClick={onConfirm}
          className="fw-bold px-4"
        >
          Yes, confirm reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const FinalConfirmationModal = ({ 
  show, 
  onHide, 
  reservationNumber 
}) => {
  const handleClose = () => {
    onHide();
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      backdrop="static"
    >
      <Modal.Header className="bg-success text-white text-center border-0">
        <Modal.Title className="w-100 text-center">
          <div className="mb-2">
            <span style={{ fontSize: '3rem' }}>✅</span>
          </div>
          Reservation Confirmed!
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center p-4">
        <div className="mb-4">
          <h4 className="text-success mb-3">
            🎉 Thank you for choosing Little Lemon!
          </h4>
          <p className="lead text-muted">
            Your reservation has been confirmed successfully.
          </p>
        </div>

        <Card className="border-success">
          <Card.Body>
            <div className="mb-3">
              <strong>📋 Reservation Number:</strong>
              <div className="h4 text-success mt-2">
                #{reservationNumber}
              </div>
            </div>
            <Alert variant="info" className="mb-0">
              <small>
                <strong>📧 Confirmation sent</strong><br />
                We've sent your reservation details to your email.
                Please arrive 15 minutes before your reserved time.
              </small>
            </Alert>
          </Card.Body>
        </Card>

        <div className="mt-4 text-muted">
          <small>
            If you need to modify or cancel your reservation, 
            contact us at (000) 000-0000
          </small>
        </div>
      </Modal.Body>

      <Modal.Footer className="justify-content-center border-0">
        <Button 
          variant="success" 
          size="lg"
          onClick={handleClose}
          className="px-5"
        >
          Perfect, see you soon! 👋
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
