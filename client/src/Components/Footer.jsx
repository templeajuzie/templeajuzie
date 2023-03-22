import styled from "styled-components";
import {
  BsDribbble,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Main = styled.div`
  margin-top: 120px;
  background-color: #020c1b;
  .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: 'Mnrope';

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: #0ff;

            :hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .groupfooter4 {
      background-color: #020c1b;
      color: aliceblue;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid gray;
      justify-items: center;
      padding: 30px 35px;

      .a {
        p {
          font-size: 12px;
          font-weight: 500;

          i {
            margin-right: 2px;
          }
        }
      }

      .b {
        ul {
          display: flex;
          align-items: center;
          gap: 30px;

          li {
            list-style: none;

            .icon {
              color: #0ff;

              :hover {
                color: #fff;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .groupfooter4 {
      background-color: #020c1b;
      color: aliceblue;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      justify-content: space-between;
      border-top: 1px solid gray;
      justify-items: center;
      padding: 30px 35px;

      .a {
        p {
          font-size: 18px;
          font-weight: 500;

          i {
            margin-right: 2px;
          }
        }
      }

      .b {
        ul {
          display: flex;
          align-items: center;
          gap: 30px;

          li {
            list-style: none;

            .icon {
              color: #0ff;

              :hover {
                color: #fff;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .groupfooter4 {
      background-color: #020c1b;
      color: aliceblue;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      justify-content: space-between;
      border-top: 1px solid gray;
      justify-items: center;
      padding: 30px 35px;

      .a {
        p {
          font-size: 13px;
          font-weight: 400;
          text-align: center;

          i {
            margin-right: 2px;
          }
        }
      }

      .b {
        ul {
          display: flex;
          align-items: center;
          gap: 30px;

          li {
            list-style: none;

            .icon {
              color: #0ff;

              :hover {
                color: #fff;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {

  const date = new Date()
  const currentyear = date.getFullYear();
  return (
    <Main>
      <div className="groupfooter4">
        <div className="a">
          <p>
            <i className="fa-solid fa-copyright"></i>
            {currentyear} Temple Ajuzie. All rights reserved. -- Privacy Policy
            - Terms of Services
          </p>
        </div>

        <div className="b">
          <ul>
            <li>
              {' '}
              <a href="https://web.facebook.com/templeajuzieofficial/?_rdc=1&_rdr">
                <BsFacebook className="icon" />{' '}
              </a>
            </li>

            <li>
              {' '}
              <a href="https://twitter.com/iamtempleajuzie?t=kI923bbIlw1xa7VEXYpaXQ&s=09">
                <BsTwitter className="icon" />{' '}
              </a>
            </li>

            <li>
              {' '}
              <a href="https://www.linkedin.com/in/temple-ajuzie-8880171a0/">
                <BsLinkedin className="icon" />{' '}
              </a>
            </li>

            <li>
              {' '}
              <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                <BsYoutube className="icon" />{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default Footer;
