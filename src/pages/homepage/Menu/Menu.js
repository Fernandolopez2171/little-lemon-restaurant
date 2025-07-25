import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import GreekSalad from "../../../assets/greek-salad.jpg";
import LemonDessert from "../../../assets/lemon-dessert.jpg";
import RestaurantFood from "../../../assets/restaurant-food.jpg";

const MENU_CONFIG = {
  title: "This Week's Specials!",
  subtitle: "Fresh Mediterranean flavors crafted with love",
  specialDishes: [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      image: GreekSalad,
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      rating: 4.8,
      category: "Salads",
    },
    {
      id: 2,
      name: "Mediterranean Bruchetta",
      price: "$8.99",
      image: RestaurantFood,
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes.",
      rating: 4.9,
      category: "Appetizers",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      image: LemonDessert,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      rating: 4.7,
      category: "Desserts",
    },
  ],
};

const DishCard = ({ dish }) => (
  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 border-0 shadow-lg rounded-4">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={dish.image}
          alt={dish.name}
          className="rounded-top-4"
          style={{ height: "280px", objectFit: "cover" }}
        />
        <Badge
          bg="warning"
          text="dark"
          className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold"
        >
          {dish.category}
        </Badge>
        <Badge
          bg="success"
          className="position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-pill"
        >
          ⭐ {dish.rating}
        </Badge>
      </div>

      <Card.Body className="p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom border-warning border-opacity-25">
          <Card.Title className="h4 text-dark mb-0 fw-bold">
            {dish.name}
          </Card.Title>
          <span className="h5 text-warning fw-bold mb-0">{dish.price}</span>
        </div>

        <Card.Text
          className="text-muted mb-4 flex-grow-1"
          style={{ lineHeight: "1.6" }}
        >
          {dish.description}
        </Card.Text>

        <Button
          variant="warning"
          className="fw-bold w-100 rounded-pill py-2"
          size="lg"
        >
          🛒 Order Now
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

const MenuHeader = () => (
  <div className="text-center mb-5">
    <h2 className="display-4 fw-bold text-warning mb-3">{MENU_CONFIG.title}</h2>
    <p className="h5 text-muted mb-4 fst-italic">{MENU_CONFIG.subtitle}</p>
    <Button
      variant="warning"
      size="lg"
      className="fw-bold px-5 py-3 rounded-pill shadow"
    >
      🍽️ Order Online
    </Button>
  </div>
);

const Menu = () => (
  <section className="py-5 bg-light">
    <Container>
      <MenuHeader />

      <Row className="g-4 justify-content-center">
        {MENU_CONFIG.specialDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Row>

      <div className="text-center mt-5">
        <Card className="d-inline-block border-0 shadow-sm rounded-4 bg-white bg-opacity-75">
          <Card.Body className="p-4">
            <p className="text-dark mb-0">
              <strong>💡 Want to see our full menu?</strong>
              <br />
              <span className="text-muted">
                Visit us in Chicago or browse our complete selection online!
              </span>
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  </section>
);

export default Menu;
