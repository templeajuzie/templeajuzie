import styled from "styled-components";
import homebg from "../Resources/Images/homebg.png";

const HomeComp = () => {

    const Main = styled.div`
        .Homesec {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      .hsec1 {
        background-image: url(${homebg});
        background-size: 300px; 
        background-position: center;
        height: 340px;
        width: 340px;
        margin-right: 60px;
        border-radius: 50%;
        border: 20px solid #444444;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        -moz-box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);
        box-shadow: -1px 1px 5px 9px rgba(137, 188, 90, 0.15);        

        :hover {
          background-position-y: -5px;
          transition: all 2s ease ;
        }
      }

      .hsec2 {
        font-family: "Poppins";

        h4 {
          font-weight: normal;
          margin-bottom: 10px;
          font-size: 16px;
          color: #ccd6f6;
          font-family: "Poppins";
        }

        h2 {
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 20px;
          font-family: "Poppins";
          color: #ccd6f6;
        }

        p {
          font-family: "Poppins", Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 0;
          font-style: normal;
          line-height: 1.75em;
          color: #a8b2d1;
        }

        ul {
          display: flex;
          margin-top: 20px;
          align-items: center;

          li {
            list-style: none;
            padding-right: 15px;

            button {
              padding: 13px 25px;
              font-size: 14px;
              font-weight: bold;
              background: #0ff;
              cursor: pointer;
              color: black;
              border-radius: 25px;
              transition: all 1s ease-in;
            }

            .btna {
              padding: 10px 35px;
              font-size: 14px;
              font-weight: bold;
              border: 3px solid #0ff;
              background: #444444;
              color: #ccd6f6;
              border-radius: 25px;
              transition: all 1s ease-in;
            }

            .btna:hover {
              background-color: #0ff;
              color: #000;
              transform: scale(1.1);
            }

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

            
          }
        }
      }
    }
    `
    return (
        <Main>
        <div className="Homesec">
            <div className="hsec1"></div>

            <div className="hsec2">
              <h4>Full Stack Developer</h4>
              <h2>Temple Ajuzie</h2>

              <p>
                I’m a Fullstack Developer specializing in building (and
                occasionally designing) <br /> modern, responsive Web and Mobile
                applications. Bringing both the technical <br /> and visual
                aspects of digital products to life.
              </p>

              <ul>
                <li>
                  <button className="btna">Download CV</button>
                </li>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-dribbble"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
        </Main>
    );
}
 
export default HomeComp;