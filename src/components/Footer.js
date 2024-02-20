import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon.svg";
import navIcon3 from "../assets/img/itch-io.svg";
import navIcon4 from '../assets/img/artstation-svgrepo-com.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/xavier-carlier-1b1695266/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/xecarlier"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://itch.io/profile/xecarlier"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.artstation.com/xaviercarlier6"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
