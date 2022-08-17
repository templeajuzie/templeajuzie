import styled from "styled-components";
import { MdLocationOn, MdAlternateEmail, MdOutlineCall } from "react-icons/md";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Body = styled.div`
  background-color: #020c1b;
  padding: 20px 90px;

  .sec1 {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    padding-top: 60px;
    align-items: center;

    h4 {
      font-size: 30px;
      color: #f5f5f5;
    }

    p {
      color: #f5f5f5;
    }
  }

  .sec2 {
    display: flex;
    justify-content: space-between;

    ul {
      padding-top: 30px;

      li {
        display: flex;
        color: #a8b2d1;
        align-items: center;
        margin-bottom: 30px;
        font-size: 14px;

        .icon {
          color: #0ff;
          font-size: 20px;
          margin-right: 20px;
        }
      }
    }

    .b{
      input {
        padding: 10px 20px;
        margin-bottom: 20px;
        border-radius: 25px;
        color: aliceblue;
        outline: none;
        border: 2px solid #17c7c7;
        background-color: transparent;
      }

      textarea {
        padding: 20px 20px;
        margin-bottom: 20px;
        border-radius: 25px;
        color: aliceblue;
        outline: none;
        border: 2px solid #17c7c7;
        background-color: transparent;
        resize: none;
      }

      #email {
        margin-right: 16px;
      }

      #submit {
        padding: 10px 60px;
        transition: all 1s;
        cursor: pointer;
        margin-left: 10px;
      }

      #submit:hover {
        background-color: #0ff;
        color: #000;
        transform: scale(1.1);
      }
    }

  }

  

`;

const Letswork = () => {
  return (
    <>

    <Navbar />

      <Body>
        <div className="sec1">
          <h4>Get In Touch</h4>
          <p> Let's Talk </p>
        </div>

        <div className="sec2">
          <div className="a">
            <ul>
              <li>
                {" "}
                <MdLocationOn className="icon" /> Lagos, Nigeria{" "}
              </li>
              <li>
                {" "}
                <MdAlternateEmail className="icon" /> Templeajuzie@gmail.com{" "}
              </li>

              <li>
                {" "}
                <MdOutlineCall className="icon" /> {`+234-90-526-370-46`}{" "}
              </li>

            </ul>

          </div>

          <div className="b">
            <form action="">
            <input type="text" name="" id="" size={66}  placeholder="Full Name" required/> <br />
              <input type="email" name="" id="email" placeholder="Enter your email address" size={28} required/> 
              <input type="text" name="" id="" placeholder="Phone Number" size={28}  required /> <br />
              <textarea name="" id="" cols="65" rows="8" placeholder="Enter your message Here" required></textarea> <br />
              <input type="submit" value="Submit" id="submit"/>
            </form>
          </div>

        </div>

        
      </Body>

      <Footer />
    </>
  );
};

export default Letswork;
