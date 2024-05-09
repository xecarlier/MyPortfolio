import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ReactPhotoCollage } from "react-photo-collage";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cover_image.png";
import projImg2 from "../assets/img/TetraCat-cover.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flux Fortress",
      description: "Rogue-like dungeon crawler",
      imgUrl: projImg1,
      url: "https://xecarlier.itch.io/flux-fortress"
    },
    {
      title: "Tetra Pets",
      description: "Cat & Dog themed tetris clone",
      imgUrl: projImg2,
      url: "https://xecarlier.itch.io/tetrapets"
    }
  ];

  const setting = {
    width: "1000px",
    height: ["350px", "300px", "450px"],
    layout: [2, 3, 1],
    photos: [
      {
        source:
          "https://cdnb.artstation.com/p/assets/images/images/072/862/079/large/xavier-carlier-art1.jpg?1708377763"
      },
      {
        source:
          "https://cdna.artstation.com/p/assets/images/images/072/862/080/large/xavier-carlier-art2.jpg?1708377767"
      },
      {
        source:
          "https://cdnb.artstation.com/p/assets/images/images/072/862/357/original/xavier-carlier-maincharv1-alt1.gif?1708378354"
      },
      {
        source:
          "https://cdna.artstation.com/p/assets/images/images/072/862/708/original/xavier-carlier-skeleton-fighter.gif?1708379128"
      },
      {
        source:
          "https://cdna.artstation.com/p/assets/images/images/072/863/022/original/xavier-carlier-skeleton-mage.gif?1708379854"
      },
      {
        source:
          "https://cdna.artstation.com/p/assets/images/images/072/862/078/large/xavier-carlier-art3.jpg?1708377758"
      }
    ],
    showNumOfRemainingPhotos: true
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Art</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="collage-cont">
                        <ReactPhotoCollage {...setting} />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
