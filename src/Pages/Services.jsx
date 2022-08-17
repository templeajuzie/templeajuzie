import styled from "styled-components";
import { StayCurrentPortraitOutlined } from "@material-ui/icons";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = styled.div`
  background: #020C1B;
  padding: 20px 90px;

  h4 {
    font-size: 30px;
    padding: 10px 12px;
    padding-top: 40px;
    color: #f5f5f5;
    margin-bottom: 30px;
  }

  hr {
    width: 150px;
    color: #aef900;
    margin-bottom: 20px;
    margin-left: 12px;
  }
`;

const Services = () => {
  const Section1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    /* row-gap: 20px;
    column-gap: 10px; */

    .card1 {
      display: flex;

      h5 {
        font-family: "Poppins", Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 0;
        font-style: normal;
        margin-bottom: 15px;
        line-height: 1.75em;
        color: #d5d5d5;
      }

      p {
        font-family: "Poppins", Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 0;
        font-style: normal;
        line-height: 1.75em;
        color: #a8b2d1;
      }
    }

    .icon {
      padding-top: 10px;
      padding-right: 25px;
      font-size: 30px;
    }

    .icon i {
      color: #12c2c2;
    }
  `;

  return (

    <>

<Navbar /> 
    <Main>

      <h4>What I Do</h4>
      <Section1>
        <div className="card1 sec1">
          <div className="icon">
            <i class="fa-solid fa-compass-drafting"></i>
          </div>
          <div className="content">
            <h5>UI / UX Designer</h5>
            <p>
              I work with certain design tools to create high-fidelity designs
              and prototypes. I design accessible and usable products which aid
              business growth.
            </p>
          </div>
        </div>
        <div className="card1 sec2">
          <div className="icon">
            <i class="fa-solid fa-display"></i>
          </div>
          <div className="content">
            <h5>Web Developer</h5>
            <p>
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
            </p>
          </div>
        </div>
        <div className="card1 sec3">
          <div className="icon">
            <i class="fa-solid fa-mobile-screen"></i>
          </div>
          <div className="content">
            <h5>Mobile App Developer</h5>
            <p>
              with a 4years of experience, I develop creative, responsive, solid
              and scalable Mobile mobile applications for android and ios, for 
              companies and individuals.
            </p>
          </div>
        </div>
        <div className="card1 sec4">
          <div className="icon">
            <i class="fa-solid fa-bullhorn"></i>
          </div>
          <div className="content">
            <h5>Social Media Manager</h5>
            <p>
              I identify and evaluates new digital technologies and use web
              analytics tools to measure site traffic to better optimize
              marketing campaigns.
            </p>
          </div>
        </div>
      </Section1>
      
    </Main>
    <Footer />
    </>
  );
};

export default Services;
