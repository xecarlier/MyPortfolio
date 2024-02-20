import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header_portfolio1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Document, Page } from 'react-pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Game Developer", "Game Programmer"];
  const period = 2000;

  const onButtonClick = () => {
    const pdfUrl = "https://1drv.ms/b/s!AsQ1csutla3w4GrxTtfnVdbzlu0j";
    const link = document.createElement("a");
    link.href = pdfUrl;
    //link.download = "CV_XavierCarlier.pdf"; // specify the filename
    //link.target = "blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeIn"}>
                <span className="tagline">Xavier's Portfolio</span>
                <h1>{`Hello! I'm a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Game Developer", "Game Programmer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a computer science graduate with extensive experience writing code and designing technology-based solutions. I'm very passionate for gaming and game development. I hope to be involved in projects where I can grow and acquire experience in the industry. I'm adept at working effectively under pressure in deadline-driven and fastpaced settings with strong organizational and problem-solving skills.</p>
                  <button onClick={onButtonClick}>Check out my Resume! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
