import styled from 'styled-components';
import abt from '../Resources/Images/about.jpg';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';

const Body = styled.div`
  background-color: #020c1b;
  padding: 20px 90px;

  .head {
    display: flex;
    margin-right: 10px;
    padding: 10px 12px;
    padding-top: 60px;
    align-items: center;

    h4 {
      font-size: 30px;
      color: #f5f5f5;
      padding-bottom: 30px;

      span {
        color: #0ff;
        font-size: 20px;
      }
    }

    p {
      color: #f5f5f5;
    }
  }

  .cardgen {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;

    .card1 p {
      color: #a8b2d1;
      line-height: 1.8rem;
      font-size: 15spx;
      font-family: 'Manrope';
      font-weight: normal;
    }

    .card2 {
      img {
        height: 400px;
        width: 370px;
        border-radius: 5px;
        position: relative;
      }

      .card2b:hover {
        height: 200px;
        width: 200px;
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
        border: 3px solid #0ff;
        transform: scale(1.1);
        background-color: transparent;
        display: none;
      }

      .card2b {
        height: 400px;
        width: 380px;
        border-radius: 5px;
        position: absolute;
        margin-top: 30px;
        margin-left: 30px;
        border: 3px solid #0ff;
        background-color: transparent;
        transition: all 1s;
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .head {
      display: flex;
      margin-right: 10px;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
        padding-bottom: 30px;

        span {
          color: #0ff;
          font-size: 20px;
        }
      }

      p {
        color: #f5f5f5;
      }
    }

    .cardgen {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      gap: 20px;

      .card1 p {
        color: #a8b2d1;
        line-height: 1.8rem;
        font-size: 13px;
        font-family: 'Manrope';
        font-weight: normal;
      }

      .card2 {
        img {
          height: 300px;
          width: 270px;
          border-radius: 5px;
          position: relative;
        }

        .card2b:hover {
          height: 150px;
          width: 150px;
          position: absolute;
          margin-top: 20px;
          margin-left: 20px;
          border: 3px solid #0ff;
          transform: scale(1.1);
          background-color: transparent;
        }

        .card2b {
          height: 290px;
          width: 260px;
          border-radius: 5px;
          position: absolute;
          border: 3px solid #0ff;
          background-color: transparent;
          transition: all 1s;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
    .head {
      display: flex;
      margin-right: 10px;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
        padding-bottom: 30px;

        span {
          color: #0ff;
          font-size: 20px;
        }
      }

      p {
        color: #f5f5f5;
      }
    }

    .cardgen {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      gap: 20px;

      .card1 p {
        color: #a8b2d1;
        line-height: 1.8rem;
        font-size: 17px;
        font-family: 'Manrope';
        font-weight: normal;
      }

      .card2 {
        img {
          height: auto;
          width: 100%;
          border-radius: 5px;
          position: relative;
        }

        .card2b:hover {
          height: 400px;
          width: 400px;
          position: absolute;
          display: none;
          margin-top: 20px;
          margin-left: 20px;
          border: 3px solid #0ff;
          transform: scale(1.1);
          background-color: transparent;
        }

        .card2b {
          height: 290px;
          width: 260px;
          border-radius: 5px;
          position: absolute;
          border: 3px solid #0ff;
          background-color: transparent;
          transition: all 1s;
        }
      }
    }
  }
`;

const Aboutme = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABOUT | Temple Ajuzie </title>
        <link rel="canonical" href="https://www.templeajuzie.com/aboutme" />
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
          content="A Highly skilled MERN developer experienced in creating
        responsive and user-friendly web applications. Proficient in both
        front-end and back-end development technologies, with expertise in
        MongoDB, Express, React, and Node.js. Strong problem-solving skills and
        a track record of delivering high-quality projects on time."
        />
      </Helmet>
      <Navbar />
      <Body>
        <div className="conatiner">
          <div className="head">
            <h4> About Me </h4>
          </div>

          <div className="cardgen">
            <div className="card1">
              <p>
                I have a strong understanding of both front-end and back-end
                development, with expertise in MongoDB, Express.js, React.js,
                and Node.js. My experience in building Restful APIs, integrating
                with third-party APIs, and using agile development methodologies
                will enable me to hit the ground running and deliver
                high-quality code that meets your requirements.
                <br /> <br /> Having worked with various front-end libraries
                such as Redux, Bootstrap, and Material UI, i have gained
                experience in building responsive and mobile-friendly
                applications. In addition, I have worked with Git for version
                control and have experience deploying applications to Google
                Firebase.
                <br /> <br /> Building digital products from inception to
                completion is what i derive pleasure from, send me a message
                now, lets create magic together. <br /> <br />
              </p>
            </div>

            <div className="card2">
              <div className="card2b"></div>

              <img src={abt} alt="" />
            </div>
          </div>
        </div>
      </Body>

      <Footer />
    </>
  );
};

export default Aboutme;
