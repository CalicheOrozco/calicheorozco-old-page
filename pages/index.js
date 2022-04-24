import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import LanguageContext from "../src/context/lenguageContext";
import NavbarComp from "../src/components/NavbarComp";
import CarouselComp from "../src/components/CarouselComp";
import FooterComp from "../src/components/FooterComp";
import { Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";

export default function Home() {
  const { lenguage } = useContext(LanguageContext);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="./logo.ico" />
        <title>Caliche Orozco | Landingpage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="fixed-top">
        <NavbarComp />
      </div>

      <div className="pt-5 mt-2">
        <CarouselComp />
      </div>

      {/* Start Skill section */}
      <section id="skills" className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade left>
                <Card>
                  <Card.Img variant="top" src="/skills1.png" alt="Liderazgo" />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "LIDERAZGO"
                        : lenguage == "En"
                        ? "LEADERSHIP"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade top>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills2.jpg"
                    alt="TRABAJO EN EQUIPO"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "TRABAJO EN EQUIPO"
                        : lenguage == "En"
                        ? "TEAMWORK"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills3.jpg"
                    alt="HABLA EN PUBLICO"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "HABLA EN PUBLICO"
                        : lenguage == "En"
                        ? "SPEAK IN PUBLIC"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills4.jpg"
                    alt="TOMA DE DECISIONES"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "TOMA DE DECISIONES"
                        : lenguage == "En"
                        ? "DECISION MAKING"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade top>
                <Card>
                  <Card.Img variant="top" src="/skills5.jpg" alt="ENSEÑANZA" />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "ENSEÑANZA"
                        : lenguage == "En"
                        ? "TEACHING"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills6.jpg"
                    alt="APRENDIZAJE RÁPIDO"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "APRENDIZAJE RÁPIDO"
                        : lenguage == "En"
                        ? "FAST LEARNING"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills7.jpg"
                    alt="Control de versiones"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "CONTROL DE VERSIONES"
                        : lenguage == "En"
                        ? "VERSIONS CONTROL"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade top>
                <Card>
                  <Card.Img variant="top" src="/skills8.jpg" alt="Terminal" />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "TERMINAL"
                        : lenguage == "En"
                        ? "TERMINAL"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Fade right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/skills9.jpg"
                    alt="Responsive Design"
                  />
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "REPONSIVE DESINGN"
                        : lenguage == "En"
                        ? "REPONSIVE DESINGN"
                        : null}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* End Skill section */}
      {/* Start Experencie section */}
      <section className="pt-4 pb-4 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase text-white">
              <h2>
                {lenguage == "Es"
                  ? "Experencia"
                  : lenguage == "En"
                  ? "Experence"
                  : null}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "BEDU"
                        : lenguage == "En"
                        ? "BEDU"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {lenguage == "Es"
                        ? "2021- Actualmente"
                        : lenguage == "En"
                        ? "2021- Currently"
                        : null}
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "Se asignaron diferentes actividades de frontend que resolví con tecnologías como:"
                        : lenguage == "En"
                        ? "Different frontend activities were assigned which I solved with technologies such as:"
                        : null}
                      <br></br>
                      <br></br>
                      -React -Editor.js
                      <br></br>
                      -Next.js -React-hook-form
                      <br></br>
                      -TypeScript -TailwindCSS
                    </Card.Text>
                    <a
                      href="/Bedu"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img variant="top" src="experencia7.jpg" alt="BEDU" />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "Scio Consulting Apprenticeship"
                        : lenguage == "En"
                        ? "Scio Consulting Apprenticeship"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {lenguage == "Es"
                        ? "2021- 2021"
                        : lenguage == "En"
                        ? "2021- 2021"
                        : null}
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "El apprenticeship se dividió en 2 fases:"
                        : lenguage == "En"
                        ? "The apprenticeship was divided into 2 phases:"
                        : null}
                      <br></br>
                      <br></br>
                      {lenguage == "Es"
                        ? "-Fase de entrenamiento"
                        : lenguage == "En"
                        ? "-Training phase"
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Fase de realización del proyecto"
                        : lenguage == "En"
                        ? "-Project realization phase"
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "entre otras actividades."
                        : lenguage == "En"
                        ? "among other activities."
                        : null}
                    </Card.Text>
                    <a
                      href="/Scio"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="experencia6.jpg"
                    alt="Scio Consulting"
                  />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "Logiety Front-end internship"
                        : lenguage == "En"
                        ? "Logiety Front-end internship"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {lenguage == "Es"
                        ? "2021- 2021"
                        : lenguage == "En"
                        ? "2021- 2021"
                        : null}
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "Se realizaron diferentes actividades como:"
                        : lenguage == "En"
                        ? "Different activities were carried out such as:"
                        : null}
                      <br></br>
                      <br></br>
                      {lenguage == "Es"
                        ? "-Creación de Landing pages"
                        : lenguage == "En"
                        ? "-Creation of Landing pages"
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Creación de Plantillas en Openpyxl"
                        : lenguage == "En"
                        ? "-Creating Templates in Openpyxl"
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "entre otras actividades."
                        : lenguage == "En"
                        ? "among other activities."
                        : null}
                    </Card.Text>
                    <a
                      href="/Logiety"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img variant="top" src="experencia5.jpg" alt="Logiety" />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "Coordinador y promotor de cultura TI"
                        : lenguage == "En"
                        ? "IT culture coordinator and promoter"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {lenguage == "Es"
                        ? "2017- En curso"
                        : lenguage == "En"
                        ? "2017- Currently"
                        : null}
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "He coordinado y organizado distintos eventos a favor de nuestra comunidad en eventos como:"
                        : lenguage == "En"
                        ? "Cordinate abd organize different events in favor of our community in event such as:"
                        : null}
                      <br></br>
                      <br></br>
                      -Talent Nights Veracruz 2017-2019
                      <br></br>
                      -Arduino Day Veracruz 2018-2019.
                      <br></br>
                      -Hacker Day 2019.
                      <br></br>
                      -Tecnovation Challange Veracruz.
                      <br></br>
                      {lenguage == "Es"
                        ? "-Meetups Tecnologicos Veracruz"
                        : lenguage == "En"
                        ? "-Technological Meetups Veracruz"
                        : null}
                      -.
                    </Card.Text>
                    <a
                      href="/cordinador"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="experencia1.jpg"
                    alt="Talentland 2019"
                  />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "Conferencias y Talleres"
                        : lenguage == "En"
                        ? "Conferences and Workshops"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {lenguage == "Es"
                        ? "2019- En curso"
                        : lenguage == "En"
                        ? "2019- Currently"
                        : null}
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "Participé como tallerista y conferencista en:"
                        : lenguage == "En"
                        ? "I participated as a workshop facilitator and conference speaker in:"
                        : null}
                      <br></br>
                      <br></br>
                      {lenguage == "Es"
                        ? "-Taller: IOT Con Raspberry pi y Python."
                        : lenguage == "En"
                        ? "-Workshop: IOT with Raspberry pi and Python."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Taller: Realidad aumentada con Spark Ar Studio."
                        : lenguage == "En"
                        ? "-Workshop: Augmented reality with Spark Ar Studio."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Taller: Introducción a Raspberry pi."
                        : lenguage == "En"
                        ? "-Workshop: Introduction to Raspberry pi."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-¿Cómo puedo ser agente de cambio en mi localidad?."
                        : lenguage == "En"
                        ? "-How can I be an agent of change in my locality?."
                        : null}

                      <br></br>
                      {lenguage == "Es"
                        ? "-IEEE Como rama estudiantil."
                        : lenguage == "En"
                        ? "-IEEE As a student branch."
                        : null}
                    </Card.Text>
                    <a
                      href="/cordinador"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="experencia2.jpg"
                    alt="conferencia de desarollo sustentable"
                  />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Institute of Electrical and Electronics Engineers ITVER
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      2017- 2020
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "Voluntario de IEEE y vicepresidente durante 2 años en mi universidad realizamos distintas actividades para promover la tecnología y la ciencia como:"
                        : lenguage == "En"
                        ? "IEEE volunteer and vice president for 2 years at my university we carry out different activities to promote technology and science such as:"
                        : null}
                      <br></br>
                      <br></br>
                      {lenguage == "Es"
                        ? "-Feria infantil de ciencias Veracruz 2017."
                        : lenguage == "En"
                        ? "-Veracruz Children's Science Fair 2017."
                        : null}

                      <br></br>
                      {lenguage == "Es"
                        ? "-IEEE Day 2018 -2020 en Veracruz."
                        : lenguage == "En"
                        ? "-IEEE Day 2018 -2020 in Veracruz."
                        : null}

                      <br></br>
                      {lenguage == "Es"
                        ? "-Scratch Day en el colegio “Las Hayas”."
                        : lenguage == "En"
                        ? "-Scratch Day at “Las Hayas” school."
                        : null}

                      <br></br>
                    </Card.Text>
                    <a
                      href="/cordinador"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="experencia3.jpg"
                    alt="IEEE ITVER"
                  />
                </Card>
              </Rotate>
            </div>

            <div className="col-12 col-md-6 col-lg-4  pb-4">
              <Rotate top left>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {lenguage == "Es"
                        ? "Estudiantes Verdes ITVER"
                        : lenguage == "En"
                        ? "ITVER Green Students"
                        : null}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      2017- 2018
                    </Card.Subtitle>
                    <Card.Text>
                      {lenguage == "Es"
                        ? "Fundador y organizador de actividades en pro del desarollo Sustentable como:"
                        : lenguage == "En"
                        ? "Founder and organizer of activities for sustainable development such as:"
                        : null}
                      :<br></br>
                      <br></br>
                      {lenguage == "Es"
                        ? "-Limpia de playas."
                        : lenguage == "En"
                        ? "-Clean beaches."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Apoyo a comunidades marginadas."
                        : lenguage == "En"
                        ? "-Support marginalized communities."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Reforestación de parques."
                        : lenguage == "En"
                        ? "-Reforestation of parks."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Visita a hospitales."
                        : lenguage == "En"
                        ? "-Visit hospitals."
                        : null}
                      <br></br>
                      {lenguage == "Es"
                        ? "-Recolecta de material reciclable."
                        : lenguage == "En"
                        ? "-Collection of recyclable material."
                        : null}
                    </Card.Text>
                    <a
                      href="/cordinador"
                      className="btn btn btn-outline-success btn-caliche"
                    >
                      {lenguage == "Es"
                        ? "Saber Más"
                        : lenguage == "En"
                        ? "Learn more"
                        : null}
                    </a>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="experencia4.jpg"
                    alt="Estudiantes Verdes ITVER"
                  />
                </Card>
              </Rotate>
            </div>
          </div>
        </div>
      </section>
      {/* End Experencie section */}
      {/* Start Programming Lenguages section */}
      <section id="lenguajes-programacion" className="pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase text-dark">
              <h2>
                {lenguage == "Es"
                  ? "Lenguajes de programación"
                  : lenguage == "En"
                  ? "PROGRAMMING LANGUAGES"
                  : null}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <Zoom left>
                <Card>
                  <Card.Img variant="top" src="/lenguaje1.jpg" alt="Python" />
                  <Card.Body>
                    <Card.Title>PYTHON</Card.Title>
                  </Card.Body>
                </Card>
              </Zoom>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <Zoom right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/lenguaje2.jpg"
                    alt="HTMLL/CSS"
                  />
                  <Card.Body>
                    <Card.Title>HTML/CCS</Card.Title>
                  </Card.Body>
                </Card>
              </Zoom>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <Zoom left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/lenguaje3.jpg"
                    alt="JavaScript"
                  />
                  <Card.Body>
                    <Card.Title>JAVASCRIPT</Card.Title>
                  </Card.Body>
                </Card>
              </Zoom>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <Zoom right>
                <Card>
                  <Card.Img variant="top" src="/lenguaje4.jpg" alt="JAVA" />
                  <Card.Body>
                    <Card.Title>JAVA</Card.Title>
                  </Card.Body>
                </Card>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      {/* End Programming Lenguages section */}
      {/* Start  Libraries section */}
      <section className="pt-4 pb-4 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase text-white">
              <h2>
                {lenguage == "Es"
                  ? "Librerias"
                  : lenguage == "En"
                  ? "Libraries"
                  : null}
              </h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce left>
                <Card>
                  <Card.Img variant="top" src="/libreria1.jpg" alt="Tailwind" />
                  <Card.Body>
                    <Card.Title>Tailwind</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce top>
                <Card>
                  <Card.Img variant="top" src="/libreria2.jpg" alt="Next JS" />
                  <Card.Body>
                    <Card.Title>Next JS</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/libreria3.jpg"
                    alt="React Hooks Form"
                  />
                  <Card.Body>
                    <Card.Title>React Hooks Form</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/libreria4.jpg"
                    alt="ReactQuery"
                  />
                  <Card.Body>
                    <Card.Title>ReactQuery</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce top>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/libreria5.jpg"
                    alt="Editor Js"
                  />
                  <Card.Body>
                    <Card.Title>Editor Js</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce right>
                <Card>
                  <Card.Img variant="top" src="/libreria6.jpg" alt="GraphQL" />
                  <Card.Body>
                    <Card.Title>GraphQL</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/libreria7.jpg"
                    alt="TypeScript"
                  />
                  <Card.Body>
                    <Card.Title>TypeScript</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce top>
                <Card>
                  <Card.Img variant="top" src="/libreria8.jpg" alt="Openpyxl" />
                  <Card.Body>
                    <Card.Title>Openpyxl</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 mb-4 ">
              <Bounce right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/libreria9.jpg"
                    alt="Selenium Webdriver"
                  />
                  <Card.Body>
                    <Card.Title>Selenium Webdriver</Card.Title>
                  </Card.Body>
                </Card>
              </Bounce>
            </div>
          </div>
        </div>
      </section>
      {/* End  Libraries section */}
      {/* Start  briefcase section */}
      <section id="portafolio" className="pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase text-dark">
              <h2>
                {lenguage == "Es"
                  ? "PORTAFOLIO"
                  : lenguage == "En"
                  ? "BRIEFCASE"
                  : null}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio1.jpg"
                    alt="SALSA CATRINA"
                  />
                  <Card.Body>
                    <Card.Title>SALSA CATRINA</Card.Title>
                    <Link href="https://salsa-catrina.surge.sh/" k>
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/Desarrollo-web/tree/master/LandingPages/Salsas-la-catrina">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio2.jpg"
                    alt="PLATZICONF MEXICO"
                  />
                  <Card.Body>
                    <Card.Title>PLATZICONF MEXICO</Card.Title>
                    <Link href="https://platziconfmexico.surge.sh/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/Desarrollo-web/tree/master/LandingPages/Platzi-bootstrap">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio3.jpg"
                    alt="WWE NETWORK"
                  />
                  <Card.Body>
                    <Card.Title>WWE NETWORK</Card.Title>
                    <Link href="https://wwe-network.surge.sh/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/Desarrollo-web/tree/master/WWE%20Network">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio5.jpg"
                    alt="Countdown Arduino Day 2021"
                  />
                  <Card.Body>
                    <Card.Title>Countdown Arduino Day 2021</Card.Title>
                    <Link href="https://countdownarduino21-caliche.surge.sh/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/Desarrollo-web/tree/master/Countdown/2021/countdown">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio4.jpg"
                    alt="SIMON DICE"
                  />
                  <Card.Body>
                    <Card.Title>SIMON DICE</Card.Title>
                    <Link href="https://simondice-caliche.surge.sh/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/Desarrollo-web/tree/master/SimonDice">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio6.jpg"
                    alt="Futurnow React Landingpage"
                  />
                  <Card.Body>
                    <Card.Title>Futurnow React Landingpage</Card.Title>
                    <Link href="https://futrnow.herokuapp.com/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/FutrNow">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio7.jpg"
                    alt="Bookmark App"
                  />
                  <Card.Body>
                    <Card.Title>Bookmark App</Card.Title>
                    <Link href="https://bookmark-app-caliche.herokuapp.com/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/evaluacion-bedu">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed right>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio8.jpg"
                    alt="Caliche Orozco Landingpage"
                  />
                  <Card.Body>
                    <Card.Title>Caliche Orozco Landingpage</Card.Title>
                    <Link href="https://www.calicheorozco.com/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/calicheorozco-old-page">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>
            <div className="col col-12 col-md-6 col-lg-6 mb-4 ">
              <LightSpeed left>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/portafolio9.jpg"
                    alt="Caliche Movie API"
                  />
                  <Card.Body>
                    <Card.Title>Caliche Movie API</Card.Title>
                    <Link href="https://caliche-movies.herokuapp.com/">
                      <a
                        target="_blank"
                        className="btn btn btn-outline-success btn-caliche"
                      >
                        {lenguage == "Es"
                          ? "Ver Proyecto"
                          : lenguage == "En"
                          ? "See Project"
                          : null}
                      </a>
                    </Link>
                    <Link href="https://github.com/CalicheOrozco/caliche-movies">
                      <a target="_blank" className="btn btn btn-caliche2">
                        Github
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </LightSpeed>
            </div>
          </div>
        </div>
      </section>
      {/* End  briefcase section */}
      {/* Start Footer section */}

      <FooterComp />

      {/* End  Footer section */}
    </div>
  );
}
