import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SocialMeida_links = () => {
  return (
    <div>
      <div style={{ color: "red", marginBottom: "40px", marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>
          Social Media
          <span style={{ color: "red" }}> Marketing</span>
        </h3>
        <h3>
          {" "}
          Services to<span style={{ color: "black" }}> scale your</span>
        </h3>
        <h3 style={{ color: "black" }}> business</h3>
      </div>
      <div className="one-all-container">
        <Container>
          <Row>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-brands fa-facebook fa-bounce"></i>Facebook
              </h4>
              Our social media marketing agency can help you create a strong
              presence on Facebook through targeted ad campaigns, engaging
              content, and audience interaction.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-brands fa-instagram fa-bounce"></i>Instagram
              </h4>
              We offer services to boost your Instagram presence with visually
              appealing content, ad campaigns, and influencer marketing.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-brands fa-linkedin fa-bounce"></i>LinkedIn
              </h4>
              We provide LinkedIn marketing services to help you reach the right
              audience, build credibility through thought leadership, and drive
              conversions.
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-brands fa-google fa-bounce"></i>Google My Business
              </h4>
              We can optimize your Google My Business listing to improve your
              online visibility, attract potential leads, and increase your
              website traffic.
            </Col>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5mr-md-5-all"
            >
              <h4>
                <i class="fa-brands fa-twitter fa-bounce"></i>Twitter
              </h4>
              Our social media marketing agency can assist you in building a
              strong Twitter presence through engaging content, targeted ad
              campaigns, and strategic community engagement.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SocialMeida_links;
