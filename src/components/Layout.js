import React from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";

function Layout({ title, children, homeButton }) {
  return (
    <main>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        {homeButton ? (
          <LinkContainer to="/">
            <Button variant="link">
              <ArrowLeftCircle size={26} color="white" />
            </Button>
          </LinkContainer>
        ) : null}
        {title ? <Navbar.Brand>{title}</Navbar.Brand> : null}
      </Navbar>
      <Container as="section" fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Layout;
