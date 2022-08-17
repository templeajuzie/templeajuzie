import styled from "styled-components";
import { BsDribbble, BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

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
  }

  .groupfooter4 p {
    font-size: 12px;
    font-weight: "Mnrope";
  }

  .groupfooter4 i {
    margin-right: 2px;
  }

  .a {

  }

  .b {

    ul {
      display: flex;
      align-items: center;

      li{
        list-style: none;

        .icon {
        color: #0ff;
        margin-right: 40px;

        :hover {
          color: #fff;
          cursor: pointer;
        }

        
      }
      }

    }

    p {
      margin-left: 30px;
    }
    
  }


`;

const Footer = () => {
  return (
    <Main>
      <div className="groupfooter4">
        <div className="a">
          <p>
            <i className="fa-solid fa-copyright"></i>2022 Temple Ajuzie. All rights
            reserved. -- Privacy Policy - Terms of Services
          </p>
        </div>

        <div className="b">
          <ul>

            <li>
              {" "}
              <BsFacebook className="icon" /> {" "}
            </li>

            <li>
              {" "}
              <BsTwitter className="icon" /> {" "}
            </li>

            <li>
              {" "}
              <BsLinkedin className="icon" /> {" "}
            </li>

            <li>
              {" "}
              <BsDribbble className="icon" /> {" "}
            </li>

            <li>
              {" "}
              <BsYoutube className="icon" /> {" "}
            </li>

            <li><p>Temple Ajuzie.</p></li>
          </ul>

          
        </div>
        
      </div>
    </Main>
  );
};

export default Footer;
