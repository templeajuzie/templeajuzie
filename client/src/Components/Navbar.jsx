import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import './../Components/Fonts/AmsterdamFourSlantTtf-4B4yl.ttf';

const Navcontainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;

  .container {
    background: #020c1b;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  nav {
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 35px;

    .a {
      h2 a {
        text-decoration: none;
        color: #ffff;
        font-size: 25px;
        font-weight: 20px;
        letter-spacing: 1px;
        font-family: 'Amsterdamone';
        font-style: italic;

        /* span {
          color: #0ff;
        } */
      }
    }

    .menubig {
      display: block;

      ul li {
        display: inline-block;
        list-style: none;
        margin-left: 35px;
        text-align: center;
        justify-content: center;
        align-items: center;

        .active {
          color: #0ff;
        }

        .iconnav {
          color: aliceblue;
          font-size: 25px;
          text-align: center;
          align-items: center;
          margin-top: auto;
          margin-bottom: auto;
        }

        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: #ccd6f6;

          :hover {
            color: #0ff;
          }
        }
      }

      button {
        padding: 10px 35px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        border: 3px solid #ccd6f6;
        background: #444444;
        color: #ccd6f6;
        border-radius: 25px;
        transition: all 1s ease-in;

        :hover {
          background-color: #d5d5d5;
          color: #000;
          transform: scale(1.1);

          a {
            color: #000;
          }
        }
      }
    }

    .menusmall {
      display: none;
    }

    .open {
      display: block;
    }

    .close {
      display: none;
    }
  }

  .navmenu {
    display: none;
  }

  @media (max-width: 1000px) {
    .container {
      background: #020c1b;
      width: 100%;
      background-size: cover;
      background-position: center;

      nav {
        padding: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 20px;

        .a {
          h2 a {
            text-decoration: none;
            color: #ffff;
            font-size: 25px;
            font-weight: 20px;
            letter-spacing: 1px;
          }
        }

        .menubig {
          display: none;

          ul li {
            display: inline-block;
            list-style: none;
            margin-left: 35px;
            text-align: center;
            justify-content: center;
            align-items: center;

            .active {
              color: #0ff;
            }

            .iconnav {
              color: aliceblue;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: bold;
              color: #ccd6f6;

              :hover {
                color: #0ff;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #ccd6f6;
            background: #444444;
            color: #ccd6f6;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }

        .menusmall {
          display: block;
          color: #ccd6f6;
          position: relative;

          .sec1,
          .sec2 {
            display: flex;
            flex-direction: row;
            gap: 2px;

            #open {
              font-size: 30px;
              padding: 2px;
              border: 1px solid #ccd6f6;
              cursor: pointer;
              display: block;
            }

            #close {
              font-size: 30px;
              padding: 2px;
              cursor: pointer;
              border: 1px solid #ccd6f6;
              display: none;
            }
          }
        }
      }

      .navmenu {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        position: absolute;
        right: 0;
        background-color: #020c1b;
        align-items: center;
        text-align: center;
        padding-top: 20px;
        height: 100vh;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column;
          gap: 35px;

          li {
            list-style: none;

            .active {
              color: #0ff;
            }

            .iconnav {
              color: aliceblue;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              color: #ccd6f6;

              :hover {
                color: #0ff;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #ccd6f6;
            background: #444444;
            color: #ccd6f6;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      background: #020c1b;
      width: 100%;
      background-size: cover;
      background-position: center;

      nav {
        padding: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 20px;

        .a {
          h2 a {
            text-decoration: none;
            color: #ffff;
            font-size: 25px;
            font-weight: 20px;
            letter-spacing: 1px;
          }
        }

        .menubig {
          display: none;

          ul li {
            display: inline-block;
            list-style: none;
            margin-left: 35px;
            text-align: center;
            justify-content: center;
            align-items: center;

            .active {
              color: #0ff;
            }

            .iconnav {
              color: aliceblue;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: bold;
              color: #ccd6f6;

              :hover {
                color: #0ff;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #ccd6f6;
            background: #444444;
            color: #ccd6f6;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }

        .menusmall {
          display: block;
          color: #ccd6f6;
          position: relative;

          .sec1,
          .sec2 {
            display: flex;
            flex-direction: row;
            gap: 2px;

            #open {
              font-size: 30px;
              padding: 2px;
              border: 1px solid #ccd6f6;
              border-radius: 4px;
              cursor: pointer;
              display: block;
            }

            #close {
              font-size: 30px;
              padding: 2px;
              cursor: pointer;
              border: 1px solid #ccd6f6;
              border-radius: 4px;
              display: none;
            }
          }
        }
      }

      .navmenu {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        position: absolute;
        right: 0;
        background-color: #020c1b;
        align-items: center;
        text-align: center;
        padding-top: 20px;
        height: 100vh;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column;
          gap: 35px;

          li {
            list-style: none;

            .active {
              color: #0ff;
            }

            .iconnav {
              color: aliceblue;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              color: #ccd6f6;

              :hover {
                color: #0ff;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #ccd6f6;
            background: #444444;
            color: #ccd6f6;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
`;

const Navbar = ({ type }) => {
  let close = document.getElementsByClassName('close');
  let nav = document.getElementById('nav');
  const [modal, SetModal] = useState(false);

  const HandleOpen = () => {
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
    SetModal(true);
    // nav.style.transition = "transform 0.5s, opacity";
  };

  const HandleClose = () => {
    document.getElementById('close').style.display = 'none';
    document.getElementById('open').style.display = 'block';
    SetModal(false);
  };

  return (
    <>
      <Navcontainer>
        <div className="container">
          <nav>
            <div className="a">
              <h2>
                <NavLink to="/">
                  {' '}
                  Temple Ajuzie<span></span>{' '}
                </NavLink>
              </h2>
            </div>

            <div className="menubig">
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutme"> About Me </NavLink>
                </li>
                <li>
                  <NavLink to="/projects"> Projects </NavLink>
                </li>
                <li>
                  <NavLink to="/services"> Services </NavLink>
                </li>
                <li>
                  <a href="https://medium.com/@templeajuzie"> Blogs </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                    {' '}
                    Tutorials{' '}
                  </a>
                </li>

                <li>
                  {' '}
                  <NavLink to="/contact">
                    <button> Contact </button>
                  </NavLink>{' '}
                </li>
              </ul>
            </div>

            <div className="menusmall">
              <div className="sec1">
                <AiOutlineMenu
                  id="open"
                  onClick={HandleOpen}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="sec2">
                <AiOutlineClose
                  id="close"
                  onClick={HandleClose}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </nav>
          {modal && (
            <div className="navmenu" id='nav'>
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutme"> About Me </NavLink>
                </li>
                <li>
                  <NavLink to="/projects"> Projects </NavLink>
                </li>
                <li>
                  <NavLink to="/services"> Services </NavLink>
                </li>
                <li>
                  <a href="https://medium.com/@templeajuzie"> Blogs </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                    {' '}
                    Tutorials{' '}
                  </a>
                </li>

                <li>
                  {' '}
                  <NavLink to="/contact">
                    <button> Contact </button>
                  </NavLink>{' '}
                </li>
              </ul>
            </div>
          )}
        </div>
      </Navcontainer>
    </>
  );
};

export default Navbar;
