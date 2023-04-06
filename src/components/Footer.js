import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
      <footer className="bg-dark text-center text-white">
        <Container className="p-4">
          <section className="mb-4">
            <Row>
              <Col>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faGoogle} />
                </Button>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faInstagram} />
                </Button>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Button>
                <Button href="#!" variant="outline-light" className="btn-floating m-1">
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </Col>
            </Row>
          </section>
  
          <section className="">
            <Form>
              <Row className="d-flex justify-content-center">
                <Col className="auto">
                  <p className="pt-2"><strong>Sign up for our newsletter</strong></p>
                </Col>
                <Col md={5} className="col-12">
                  <Form.Group controlId="form5Example21" className="form-outline form-white mb-4">
                    <Form.Control type="email" placeholder="Email address" />
                    <Form.Label className="form-label">Email address</Form.Label>
                  </Form.Group>
                </Col>
                <Col className="auto">
                  <Button variant="outline-light" className="mb-4">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </section>
  
          <section className="mb-4">
            <p>
            Ravinder Sports Wear is a leading manufacturer of high-quality uniforms and accessories. We specialize in producing uniforms for sports teams, schools, and corporate clients. Our product line includes sports uniforms, school uniforms, blazers, belts, ties, socks, and more.
            </p>
          </section>

          <section className='mb-2'>
            <h2>Content: 9666637001, 9440063721, 9492563721</h2>
          </section>
  
          <section className="">
            <Row>
              <Col>
                <a className="text-white" href="https://ravindersportswear.com/">ravindersportswear.com</a>
              </Col>
            </Row>
          </section>
        </Container>
  
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2023. All rights reserved. Created by Ravinder Sports Wear.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  