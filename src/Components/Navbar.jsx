import { LightMode } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import App from "../App";

import HomeComp from "../Components/HomeComp";

const Navbar = ({type}) => {
  const Navcontainer = styled.div`
    .container {
      background: #020c1b;
      width: 100%;
      background-size: cover;
      background-position: center;
    }

    nav {
      padding: 35px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 35px;
    }

    nav h2 a {
      text-decoration: none;
      color: #ffff;
      font-size: 35px;
      font-weight: 20px;
      letter-spacing: 1px;
      font-family: "Satisfy", cursive;

      span {
        color: #0ff;
        font-family: "Satisfy", cursive;
      }
    }

    nav ul li {
      display: inline-block;
      list-style: none;
      margin-left: 35px;
      text-align: center;
      justify-content: center;
      align-items: center;

      .active{
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
    }

    nav ul li a {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      color: #ccd6f6;

      a:focus {
        background-color: #aef900;
      }
    }

    nav button {
      padding: 10px 35px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      border: 3px solid #ccd6f6;
      background: #444444;
      color: #ccd6f6;
      border-radius: 25px;
      transition: all 1s ease-in;
    }

    nav button:hover {
      background-color: #d5d5d5;
      color: #000;
      transform: scale(1.1);

      a {
        color: #000;
      }
    }
  `;

  

  switch (type) {
    case "/":
      console.log('home')
      break;

      case "/about":
      console.log('about')
      break;
  
    default:
      break;
  }



  return (
    <>
      <Navcontainer>
        <div className="container">
          <nav>
            <h2>
              <Link to="/">
                {" "}
                Temple<span>-AJ</span>{" "}
              </Link>
            </h2>

            <ul > 
              <li>
                <Link to="/" className="active">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="/aboutme" >
                  {" "}
                  About Me{" "}
                </Link>
              </li>
              <li>
                <Link to="/projects" >
                  {" "}
                  Projects{" "}
                </Link>
              </li>
              <li>
                <Link to="/services">
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link to="/blogs" type="blogs">
                  {" "}
                  Blogs{" "}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A"
                 
                >
                  {" "}
                  Tutorials{" "}
                </a>
              </li>

              <li>
                {" "}
                <Link to="/contact">
                  <button> Contact </button>
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </Navcontainer>
    </>
  );
};

export default Navbar;
