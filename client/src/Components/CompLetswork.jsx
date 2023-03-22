import styled from 'styled-components';
import { MdLocationOn, MdAlternateEmail, MdOutlineCall } from 'react-icons/md';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import contact from '../Resources/Images/Contact-us.jpg';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { CircularProgress } from '@material-ui/core';

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;

    .a {
      img {
        width: 390px;
        height: auto;
        border-radius: 8px;
      }
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
    }

    .b {
      input {
        padding: 10px 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        color: aliceblue;
        outline: none;
        border: 2px solid #0ff;
        background-color: transparent;
      }

      textarea {
        padding: 20px 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        color: aliceblue;
        outline: none;
        border: 2px solid #0ff;
        background-color: transparent;
        resize: none;
      }

      .fullname {
        width: 100%;
        padding: 15px;
      }

      .email {
        width: 100%;
        padding: 15px;
      }

      .phonenumber {
        width: 100%;
        padding: 15px;
      }

      .textarea {
        width: 100%;
      }

      #email {
        margin-right: 16px;
      }

      #submit {
        padding: 10px 60px;
        transition: all 1s;
        cursor: pointer;
        background-color: #24d6d6;
        color: #020c1b;
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
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
        font-size: 18px;
      }
    }

    .sec2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;

      .a {
        img {
          width: 300px;
          height: auto;
        }
        ul {
          padding-top: 30px;

          li {
            display: flex;
            color: #a8b2d1;
            align-items: center;
            margin-bottom: 30px;
            font-size: 18px;

            .icon {
              color: #0ff;
              font-size: 20px;
              margin-right: 20px;
            }
          }
        }
      }

      .b {
        input {
          padding: 10px 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          color: aliceblue;
          outline: none;
          border: 2px solid #0ff;
          font-size: 18px;
          background-color: transparent;
        }

        textarea {
          padding: 20px 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          color: aliceblue;
          outline: none;
          font-size: 18px;
          border: 2px solid #0ff;
          background-color: transparent;
          resize: none;
        }

        .fullname {
          width: 100%;
        }

        .email {
          width: 100%;
        }

        .phonenumber {
          width: 100%;
        }

        .textarea {
          width: 100%;
        }

        #email {
          margin-right: 16px;
        }

        #submit {
          padding: 10px 60px;
          transition: all 1s;
          cursor: pointer;
          color: #020c1b;
          background-color: #24d6d6;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
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
        font-size: 16px;
      }
    }

    .sec2 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 20px;

      .a {
        img {
          width: 100%;
          height: auto;
        }
        ul {
          padding-top: 30px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;

          li {
            display: flex;
            color: #a8b2d1;
            align-items: center;
            margin-bottom: 30px;
            font-size: 18px;

            .icon {
              color: #0ff;
              font-size: 20px;
              margin-right: 10px;
            }
          }
        }
      }

      .b {
        input {
          padding: 10px 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          color: aliceblue;
          outline: none;
          font-size: 16px;
          border: 2px solid #0ff;
          background-color: transparent;
        }

        textarea {
          padding: 20px 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          color: aliceblue;
          font-size: 16px;
          outline: none;
          border: 2px solid #0ff;
          background-color: transparent;
          resize: none;
        }

        .fullname {
          width: 100%;
        }

        .email {
          width: 100%;
        }

        .phonenumber {
          width: 100%;
        }

        .textarea {
          width: 100%;
        }

        #email {
          margin-right: 16px;
        }

        #submit {
          padding: 10px 60px;
          transition: all 1s;
          cursor: pointer;
          color: #020c1b;
          background-color: #24d6d6;
        }
      }
    }
  }
`;

const CompLetswork = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [body, setBody] = useState('');

  const form = useRef();
  const [ispending, SetIspending] = useState(false);

  const sendEmial = (e) => {
    e.preventDefault();
    SetIspending(true);

    emailjs
      .sendForm(
        'service_jn6wgi6',
        'template_hu3qh5l',
        form.current,
        'VLVnudCHNkF7ki8HW'
      )
      .then(
        (result) => {
          SetIspending(true);
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been sent, thanks you.',
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          SetIspending(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<p>Check your internet connection and try again.</p>',
          });
          SetIspending(false);
        }
      );
  };

  return (
    <>
      <Body>
        <div className="sec1">
          <h4>Get In Touch</h4>
          <p> Let's Talk </p>
        </div>

        <div className="sec2">
          <div className="a">
            <img src={contact} alt="" />

            <ul>
              <li>
                {' '}
                <MdAlternateEmail className="icon" /> Templeajuzie@gmail.com{' '}
              </li>

              <li>
                {' '}
                <MdOutlineCall className="icon" /> {`+234-90-526-370-46`}{' '}
              </li>

              <li>
                {' '}
                <MdLocationOn className="icon" /> Lagos, Nigeria{' '}
              </li>
            </ul>
          </div>

          <div className="b">
            <form ref={form} action="" onSubmit={sendEmial}>
              <input
                type="text"
                name="from_name"
                id=""
                placeholder="Full Name"
                required
                className="fullname"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />{' '}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
                className="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Phone Number"
                className="phonenumber"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />{' '}
              <br />
              <textarea
                name="message"
                id=""
                placeholder="Enter your message Here"
                required
                className="textarea"
                rows={7}
                // value={body}
                // onChange={(e) => setBody(e.target.value)}
              ></textarea>{' '}
              <br />
              {!ispending && <input type="submit" value="Submit" id="submit" />}
              {ispending && (
                <input type="submit" value="Loading..." id="submit" />
              )}
            </form>
          </div>
        </div>
      </Body>

    </>
  );
};

export default CompLetswork;
