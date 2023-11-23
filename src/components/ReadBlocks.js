import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import I1 from "../images/readblock1.webp";
import I2 from "../images/readblock2.png";
import I3 from "../images/readblock3.jpeg";

const ReadBlocks = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4 style={{ color: "red" }}> Knowledge at Your Fingertips</h4>
      <h3>Read Our Latest Blog Posts, News & Articles</h3>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I3} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                The Significance of Social Media Marketing for..
              </h4>
              <p>
                <i class="fa-solid fa-user"></i> Post By Admin
              </p>
              <p>
                Have you ever considered the significance of social media
                marketing in promoting...
              </p>
              Read More&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I2} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                Pay Per Click Advertising: Powerful Strategy for..
              </h4>
              <p>
                <i class="fa-solid fa-user"></i> Post By Admin
              </p>
              <p>
                Social Media Design&nbsp;{" "}
                <p>
                  Have you ever considered the significance of social media
                  marketing in promoting...
                </p>
                Read More&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I1} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                Top 5 Link Building Mistakes To Watch..
              </h4>
              <p>
                <p>
                  <i class="fa-solid fa-user"></i> Post By Admin
                </p>
                <p>
                  Have you ever considered the significance of social media
                  marketing in promoting...
                </p>
                Read More&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </Col>

          {/* Add more Col components for additional items */}
        </Row>
      </Container>
    </div>
  );
};

export default ReadBlocks;
