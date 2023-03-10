import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";
const About = () => {
  return (
    <div className="about-page">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="m-auto">
            <div>
              <h2 className="text-center mb-4">About Us</h2>

              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              {/* <div className="text-center">
                <ul className="list-unstyled p-0 -0">
                  <li>
                    <i class="fa fa-check"></i> Separated they live in
                    Bookmarksgrove
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Separated they live in
                    Bookmarksgrove
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Separated they live in
                    Bookmarksgrove
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Separated they live in
                    Bookmarksgrove
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
