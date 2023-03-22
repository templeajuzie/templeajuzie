import { Code, CodeOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {BsFillFileEarmarkCodeFill, BsBoxArrowUpRight} from 'react-icons/bs';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Zoom from 'react-reveal/Zoom';

const Body = styled.div`
  background-color: #020c1b;
  padding: 20px 90px;

  .head {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 12px;
    padding-top: 60px;
    align-items: center;

    h4 {
      font-size: 30px;
      color: #fff;
      padding-bottom: 30px;
    }

    p {
      color: aliceblue;
      cursor: pointer;
    }
  }

  .projectdiv {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    .card:hover {
      transform: scale(1.04);
    }

    .card {
      background-color: #112240;
      border-radius: 5px;
      padding: 25px 25px;
      transition: all 1s ease-in;
      -webkit-box-shadow: -1px 1px 5px 9px rgba(85, 75, 75, 0.15);
      -moz-box-shadow: -1px 1px 5px 9px rgba(78, 74, 74, 0.15);
      box-shadow: -1px 1px 5px 9px rgba(78, 73, 73, 0.15);

      .icons {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 20px;
        color: #0db0b0;
        align-items: center;

        .a {
          font-size: 30px;
        }

        .fa-folder,
        .fa-github,
        .fa-arrow {
          :hover {
            color: #0ff;
            cursor: pointer;
          }
        }

        .b {
          font-size: 20px;

          i {
            margin-right: 10px;
          }
        }
      }

      h4 {
        margin-bottom: 15px;
        color: aliceblue;
        font-family: 'Poppins';
        font-weight: normal;
        font-size: 16px;
      }

      p {
        margin-bottom: 20px;
        color: #a8b2d1;
        font-family: 'Poppins';
        font-size: 14px;
      }

      h5 {
        margin-bottom: 10px;
        color: aliceblue;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .head {
      display: flex;
      justify-content: space-between;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #fff;
        padding-bottom: 30px;
      }

      p {
        color: aliceblue;
        cursor: pointer;
      }
    }

    .projectdiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;

      .card:hover {
        transform: scale(1.04);
      }

      .card {
        background-color: #112240;
        border-radius: 5px;
        padding: 25px 25px;
        transition: all 1s ease-in;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(85, 75, 75, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(78, 74, 74, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(78, 73, 73, 0.15);

        .icons {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          margin-bottom: 20px;
          color: #0db0b0;
          align-items: center;

          .a {
            font-size: 30px;
          }

          .fa-folder,
          .fa-github,
          .fa-arrow {
            :hover {
              color: #0ff;
              cursor: pointer;
            }
          }

          .b {
            font-size: 20px;

            i {
              margin-right: 10px;
            }
          }
        }

        h4 {
          margin-bottom: 15px;
          color: aliceblue;
          font-family: 'Poppins';
          font-weight: normal;
          font-size: 16px;
        }

        p {
          margin-bottom: 20px;
          color: #a8b2d1;
          font-family: 'Poppins';
          font-size: 14px;
        }

        h5 {
          margin-bottom: 10px;
          color: aliceblue;
          font-family: 'Poppins';
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
    .head {
      display: flex;
      justify-content: space-between;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #fff;
        padding-bottom: 30px;
      }

      p {
        color: aliceblue;
        cursor: pointer;
      }
    }

    .projectdiv {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      .card:hover {
        transform: scale(1.04);
      }

      .card {
        background-color: #112240;
        border-radius: 5px;
        padding: 25px 25px;
        transition: all 1s ease-in;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(85, 75, 75, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(78, 74, 74, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(78, 73, 73, 0.15);

        .icons {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          margin-bottom: 20px;
          color: #0db0b0;
          align-items: center;

          .a {
            font-size: 30px;
          }

          .fa-folder,
          .fa-github,
          .fa-arrow {
            :hover {
              color: #0ff;
              cursor: pointer;
            }
          }

          .b {
            font-size: 20px;

            i {
              margin-right: 10px;
            }
          }
        }

        h4 {
          margin-bottom: 15px;
          color: aliceblue;
          font-family: 'Poppins';
          font-weight: normal;
          font-size: 16px;
        }

        p {
          margin-bottom: 20px;
          color: #a8b2d1;
          font-family: 'Poppins';
          font-size: 14px;
        }

        h5 {
          margin-bottom: 10px;
          color: aliceblue;
          font-family: 'Poppins';
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }
`;


const Projects = () => {
  return (
    <>
      <Body>
        <div className="head">
          <h4>Projects...</h4>
          <p>See more</p>
        </div>

        <div className="projectdiv">
          <Zoom bottom>
            <div className="card card1">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="card card2">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="card card3">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="card card4">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="card card5">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="card card6">
              <div className="icons">
                <div className="a">
                  <i className="fa-regular fa-folder"></i>
                </div>

                <div className="b">
                  <i className="fa-brands fa-github"></i>
                  <BsBoxArrowUpRight className="fa-arrow" />
                </div>
              </div>

              <h4>
                {' '}
                Android App built with <br />
                Java and Firebase
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, numquam molestias ullam expedita minus iure minima
                dolorem molestiae magni non?
              </p>

              <h5> Java, XML, Firebase </h5>
            </div>
          </Zoom>
        </div>
      </Body>

      {/* <Footer /> */}
    </>
  );
};

export default Projects;
