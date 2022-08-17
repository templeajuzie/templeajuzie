import styled from "styled-components";
import abt from "../Resources/Images/about.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"




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
    gap: 20px;

    .card1 p {
      color: #a8b2d1;
      line-height: 1.8rem;
      font-size: 15spx;
      font-family: "Manrope";
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
        margin-top: 30px;
        margin-left: 30px;
        border: 3px solid #0ff;
        background-color: transparent;
        transition: all 1s;
      }
    }
  }
`;

const Aboutme = () => {
  return (
    <>
    <Navbar />
      <Body>
        <div className="head">
          <h4> About Me </h4>
        </div>

        <div className="cardgen">
          <div className="card1">
            <p>
              Hello! My name is Temple Ajuzie and I enjoy creating things that{" "}
              <br /> live on the internet. <br /> <br />I design Web {`&`}{" "}
              Mobile Applications. I can provide clean code and <br />
              pixel perfect design. I also make the website {`&`} more
              interactive with <br /> web animations.I can provide clean code
              and pixel perfect design. <br />I also make the website
              {`&`} more interactive with web animations. <br /> <br /> A
              responsive design makes your website accessible to all users,
              regardless of their device. <br />
              My interest in web development started back in 2012 when I <br />{" "}
              decided to try editing custom Tumblr themes — turns out <br />{" "}
              hacking together a custom reblog button taught me a lot about{" "}
              <br /> HTML {`&`} CSS! <br /> <br />
            </p>
          </div>

          <div className="card2">
            <div className="card2b"></div>

            <img src={abt} alt="" />
          </div>
        </div>
      </Body>

      <Footer />
    </>
  );
};

export default Aboutme;
