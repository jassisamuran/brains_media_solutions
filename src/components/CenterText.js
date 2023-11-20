import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cover from "../images/cover.jpg";
const CenterText = () => {
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          {/* Box for Image */}
          <Col xs={12} md={6}>
            <div style={{ border: "1px solid black", padding: "20px" }}>
              <img
                src={cover}
                alt="Your Image Alt Text"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Col>

          {/* Box for Text */}
          <Col xs={12} md={6}>
            <div style={{ border: "1px solid black", padding: "20px" }}>
              <h3>
                <b>
                  {" "}
                  Why is Social Media important in today’s thriving digital
                  marketing world?
                </b>
              </h3>
              <p style={{ marginTop: "50px" }}>
                Social media is essential for any business or brand looking to
                succeed in today’s digital age. It allows companies to reach out
                and engage and build strong relationships with their customers.
                Social media platforms like Facebook, Instagram, LinkedIn, and
                Twitter offer an excellent opportunity to increase brand
                awareness, drive website traffic, generate leads, and boost
                sales. This is an affordable way to promote your brand, making
                it the best marketing strategy for businesses of all sizes.In
                short, social media is not just important; it’s critical for
                businesses to leverage the power of social media and stay
                competitive in today’s marketplace.
              </p>
              <br />

              <br />
              <Button variant="dark">
                <i class="fa-solid fa-phone fa-beat"></i>&nbsp; Contact Us Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CenterText;
