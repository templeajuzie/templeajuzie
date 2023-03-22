import styled from 'styled-components';
import { StayCurrentPortraitOutlined } from '@material-ui/icons';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  padding: 20px 90px;
  height: auto;

  .header {
    h4 {
      font-size: 30px;
      padding: 10px 12px;
      padding-top: 40px;
      color: #f5f5f5;
      margin-bottom: 30px;
    }
  }

  .Section1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    /* row-gap: 20px;
    column-gap: 10px; */

    .card1 {
      display: flex;

      h5 {
        font-family: 'Poppins', Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 0;
        font-style: normal;
        margin-bottom: 15px;
        line-height: 1.75em;
        color: #d5d5d5;
      }

      p {
        font-family: 'Poppins', Helvetica, sans-serif;
        font-size: 15px;
        width: 400px;
        font-style: normal;
        line-height: 1.75em;
        color: #a8b2d1;
      }

      .icon {
        padding-top: 10px;
        padding-right: 25px;
        font-size: 30px;

        i {
          color: #12c2c2;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .header {
      h4 {
        font-size: 30px;
        padding: 10px 12px;
        padding-top: 40px;
        color: #f5f5f5;
        margin-bottom: 30px;
      }
    }

    .Section1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      /* row-gap: 20px;
    column-gap: 10px; */

      .card1 {
        display: flex;

        h5 {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          margin-bottom: 15px;
          line-height: 1.75em;
          color: #d5d5d5;
        }

        p {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          width: 90%;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .icon {
          padding-top: 10px;
          padding-right: 25px;
          font-size: 30px;

          i {
            color: #12c2c2;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding: 20px 30px;
    .header {
      h4 {
        font-size: 30px;
        padding: 10px 12px;
        padding-top: 40px;
        color: #f5f5f5;
        margin-bottom: 30px;
      }
    }

    .Section1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      /* row-gap: 20px;
    column-gap: 10px; */

      .card1 {
        display: flex;

        h5 {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          margin-bottom: 15px;
          line-height: 1.75em;
          color: #d5d5d5;
        }

        p {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 0;
          font-style: normal;
          width: 90%;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .icon {
          padding-top: 10px;
          padding-right: 25px;
          font-size: 30px;

          i {
            color: #12c2c2;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding: 20px 30px;
    .header {
      h4 {
        font-size: 30px;
        padding: 10px 12px;
        padding-top: 40px;
        color: #f5f5f5;
        margin-bottom: 30px;
      }
    }

    .Section1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      /* row-gap: 20px;
    column-gap: 10px; */

      .card1 {
        display: flex;

        h5 {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          margin-bottom: 15px;
          line-height: 1.75em;
          color: #d5d5d5;
        }

        p {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          width: 100%;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .icon {
          padding-top: 10px;
          padding-right: 25px;
          font-size: 30px;

          i {
            color: #12c2c2;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
    .header {
      h4 {
        font-size: 30px;
        padding: 10px 12px;
        padding-top: 40px;
        color: #f5f5f5;
        margin-bottom: 30px;
      }
    }

    .Section1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      /* row-gap: 20px;
    column-gap: 10px; */

      .card1 {
        display: flex;

        h5 {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          margin-bottom: 15px;
          line-height: 1.75em;
          color: #d5d5d5;
        }

        p {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          width: 100%;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .icon {
          padding-top: 10px;
          padding-right: 25px;
          font-size: 30px;

          i {
            color: #12c2c2;
          }
        }
      }
    }
  }
`;

const Services = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SERVICES | Temple Ajuzie </title>
        <link rel="canonical" href="https://www.templeajuzie.com/services" />
        <meta
          name="keywords"
          content="MongoDB, Express.js, React.js, Node.js, full-stack development, JavaScript, web development, web development frameworks, NoSQL databases, server-side programming, client-side programming
, Advertising,
SEO, Marketing
, Copywriting
, Web Design Services
, Web Development Services
, Hosting ,
programming, software development, software engineering, algorithms, data structures, computer science, computer engineering, software architecture, software design, software testing, software deployment, version control, agile development, Scrum, DevOps, continuous integration, continuous deployment
, Website Management
, Business Services
, Web Design
, Website Hosting
, SEO Optimization
, Website Design
, Website Management
, Digital Marketing, Customer Relationship Management System
, Search Engine Optimisation, Website Design, Search Engine Optimisation, Logo Design, Copywriting, Hosting"
        />
        <meta
          name="desccription"
          content="Discover some of the Services that I provide to businesses and high pfofiled individuals."
        />
      </Helmet>
      <Navbar />
      <Container>
        <div className="header">
          <h4>What I Do</h4>
        </div>

        <div className="Section1">
          <Fade left>
            <div className="card1 sec1">
              <div className="icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <div className="content">
                <h5>UI / UX Designer</h5>
                <p>
                  I work with certain design tools to create high-fidelity
                  designs and prototypes. I design accessible and usable
                  products which aid business growth.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="card1 sec2">
              <div className="icon">
                <i className="fa-solid fa-display"></i>
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
          </Fade>

          <Fade left>
            <div className="card1 sec3">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <div className="content">
                <h5>Mobile App Developer</h5>
                <p>
                  with a 4years of experience, I develop creative, responsive,
                  solid and scalable Mobile mobile applications for android and
                  ios, for companies and individuals.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="card1 sec4">
              <div className="icon">
                <i className="fa-solid fa-bullhorn"></i>
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
          </Fade>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
