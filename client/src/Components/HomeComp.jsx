import styled from 'styled-components';
import homebg from '../Resources/Images/homebg.jpg';
import header from '../Resources/Images/header.jpg';
import fileSaver from 'file-saver';
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
  /* background-image: url(${header});
  background-size: auto;
  background-position: center; */
  .Homesec {
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .hsec1 {
      background-image: url(${homebg});
      background-size: 300px;
      background-position: center;
      height: 340px;
      width: 340px;
      border-radius: 50%;
      border: 20px solid #444444;
      -webkit-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
      -moz-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
      box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);

      :hover {
        background-position-y: -5px;
        transition: all 2s ease-in-out;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(67, 230, 230, 0.781);
        -moz-box-shadow: -1px 1px 5px 9px rgbargba(67, 230, 230, 0.781);
        box-shadow: -1px 1px 5px 9px rgba(67, 230, 230, 0.781);
      }
    }

    .hsec2 {
      font-family: 'Poppins';

      h4 {
        font-weight: normal;
        margin-bottom: 10px;
        font-size: 16px;
        color: #ccd6f6;
        font-family: 'Poppins';
      }

      h2 {
        font-size: 48px;
        line-height: 56px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 20px;
        font-family: 'Poppins';
        color: #ccd6f6;
      }

      p {
        font-family: 'Poppins', Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 0;
        width: 520px;
        font-style: normal;
        line-height: 1.75em;
        color: #a8b2d1;
      }

      .check {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #f5f5f5;

          button {
            height: auto;
            width: max-content;
            padding: 12px 26px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 25px;
            border: 3px solid #0ff;
            background: #232222;
            color: #ccd6f6;
            transition: all 1s ease-in;

            :hover {
              background-color: #0ff;
              color: #000;
              transform: scale(1.1);
            }
          }
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: center;

          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            list-style: none;
            padding-right: 15px;
            font-size: 22px;

            i {
              border-radius: 4px;
              padding: 5px;
              background: #f5f5f5;
              color: #134646;

              :hover {
                color: #0ff;
                transition: all 1s ease-in-out;
                background: transparent;
                cursor: pointer;
              }
            }

            .fa-facebook-f {
              padding: 5px 8px;
            }

            .fa-linkedin {
              padding: 5px 7px;
            }

            .fa-youtube {
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 0 40px;

    .Homesec {
      margin-top: 80px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .hsec1 {
        background-image: url(${homebg});
        background-size: 250px;
        background-position: center;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border: 20px solid #444444;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);

        :hover {
          background-position-y: -5px;
          transition: all 2s ease;
        }
      }

      .hsec2 {
        font-family: 'Poppins';
        width: auto;

        h4 {
          font-weight: normal;
          margin-bottom: 10px;
          font-size: 16px;
          color: #ccd6f6;
          font-family: 'Poppins';
        }

        h2 {
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 20px;
          font-family: 'Poppins';
          color: #ccd6f6;
        }

        p {
          font-family: 'Poppins', Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 0;
          text-align: start;
          width: 345px;
          font-style: normal;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .check {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #f5f5f5;

            button {
              height: auto;
              width: max-content;
              padding: 8px 13px;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              border-radius: 25px;
              border: 3px solid #0ff;
              background: #444444;
              color: #ccd6f6;
              transition: all 1s ease-in;

              :hover {
                background-color: #0ff;
                color: #000;
                transform: scale(1.1);
              }
            }
          }

          ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
              display: flex;
              flex-direction: row;
              align-items: center;
              list-style: none;
              padding-right: 15px;
              font-size: 22px;

              i {
                border-radius: 4px;
                padding: 5px;
                background: #f5f5f5;
                color: #134646;

                :hover {
                  color: #0ff;
                  transition: all 1s ease-in-out;
                  background: transparent;
                  cursor: pointer;
                }
              }

              .fa-facebook-f {
                padding: 5px 8px;
              }

              .fa-linkedin {
                padding: 5px 7px;
              }

              .fa-youtube {
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    .Homesec {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;

      .hsec1 {
        background-image: url(${homebg});
        background-size: 255px;
        background-position: center;
        height: 300px;
        border-radius: 50%;
        border: 20px solid #444444;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);

        :hover {
          background-position-y: -5px;
          transition: all 2s ease;
        }
      }

      .hsec2 {
        font-family: 'Poppins';

        h4 {
          font-weight: normal;
          margin-bottom: 10px;
          text-align: center;
          font-size: 16px;
          color: #ccd6f6;
          font-family: 'Poppins';
        }

        h2 {
          font-size: 30px;
          line-height: 56px;
          font-weight: 600;
          text-align: center;
          margin-top: 0;
          margin-bottom: 20px;
          font-family: 'Poppins';
          color: #ccd6f6;
        }

        p {
          font-family: 'Manrope';
          font-size: 18px;
          font-weight: 500;
          text-align: justify;
          width: 97%;
          font-style: normal;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .check {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #f5f5f5;

            button {
              height: auto;
              width: max-content;
              padding: 8px 13px;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              border-radius: 25px;
              border: 3px solid #0ff;
              background: #444444;
              color: #ccd6f6;
              transition: all 1s ease-in;

              :hover {
                background-color: #0ff;
                color: #000;
                transform: scale(1.1);
              }
            }
          }

          ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
              display: flex;
              flex-direction: row;
              align-items: center;
              list-style: none;
              padding-right: 15px;
              font-size: 22px;

              i {
                border-radius: 4px;
                padding: 5px;
                background: #f5f5f5;
                color: #134646;

                :hover {
                  color: #0ff;
                  transition: all 1s ease-in-out;
                  background: transparent;
                  cursor: pointer;
                }
              }

              .fa-facebook-f {
                padding: 5px 8px;
              }

              .fa-linkedin {
                padding: 5px 7px;
              }

              .fa-youtube {
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    .Homesec {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;

      .hsec1 {
        background-image: url(${homebg});
        background-size: 255px;
        background-position: center;
        height: 300px;
        border-radius: 50%;
        border: 20px solid #444444;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);

        :hover {
          background-position-y: -5px;
          transition: all 2s ease;
        }
      }

      .hsec2 {
        font-family: 'Poppins';

        h4 {
          font-weight: normal;
          margin-bottom: 10px;
          text-align: center;
          font-size: 16px;
          color: #ccd6f6;
          font-family: 'Poppins';
        }

        h2 {
          font-size: 30px;
          line-height: 56px;
          font-weight: 600;
          text-align: center;
          margin-top: 0;
          margin-bottom: 20px;
          font-family: 'Poppins';
          color: #ccd6f6;
        }

        p {
          font-family: 'Manrope';
          font-size: 16px;
          font-weight: 500;
          text-align: justify;
          width: 97%;
          font-style: normal;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        .check {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: auto;
          width: 100%;
          align-items: center;
          justify-content: center;

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #f5f5f5;

            button {
              height: auto;
              width: max-content;
              padding: 12px 30px;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              border-radius: 25px;
              border: 3px solid #0ff;
              background: #444444;
              color: #ccd6f6;
              transition: all 1s ease-in;

              :hover {
                background-color: #0ff;
                color: #000;
                transform: scale(1.1);
              }
            }
          }
          ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
              display: flex;
              flex-direction: row;
              align-items: center;
              list-style: none;
              padding-right: 15px;
              font-size: 22px;

              i {
                border-radius: 4px;
                padding: 5px;
                background: #f5f5f5;
                color: #134646;

                :hover {
                  color: #0ff;
                  transition: all 1s ease-in-out;
                  background: transparent;
                  cursor: pointer;
                }
              }

              .fa-facebook-f {
                padding: 5px 8px;
              }

              .fa-linkedin {
                padding: 5px 7px;
              }

              .fa-youtube {
              }
            }
          }
        }
      }
    }
  }
`;

const HomeComp = () => {
  return (
    <Main>
      <div className="Homesec">
        <div className="hsec1"></div>

        <div className="hsec2">
          <h4>Software Developer</h4>
          <h2>Temple Ajuzie</h2>

          <p>
            As a software engineer, I specialize in developing full-stack web
            applications using MongoDB, Express.js, React.js, and Node.js. With
            expertise in both server-side and client-side programming, I am
            capable of creating robust and scalable web solutions that meet the
            needs of businesses and organizations.
          </p>

          <div className="check">
            <a href="https://drive.google.com/u/0/uc?id=1gBwZL6jh-QXJIsjcJNAVchNXVOCfSHkz&export=download">
              <button className="btna">Download CV</button>
            </a>

            <ul>
              <li></li>
              <li>
                <a href="https://web.facebook.com/templeajuzieofficial/?_rdc=1&_rdr">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/iamtempleajuzie?t=kI923bbIlw1xa7VEXYpaXQ&s=09">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/temple-ajuzie-8880171a0/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HomeComp;
