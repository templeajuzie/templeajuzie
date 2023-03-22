import styled from "styled-components";
import AdminNavbar from "../AdminComponents/AdminNavbar";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import React, { useState } from "react";


const CreateBlog = () => {
  const Container = styled.div`
    .admingen {
      display: grid;
      grid-template-columns: 1fr 5fr;

      .gen1 {
        background-color: #020c1b;
      }

      .gen2 {
        background-color: #ccd6f6;
        height: auto;

        .create {
          margin-top: 50px;
          margin-right: 40px;

          h3 {
            margin-top: 25px;
            font-size: 14px;
            text-align: end;
            display: flex;
            padding: 7px 30px;
            border-radius: 4px;
            border: none;
          }

          form {
            margin-left: 40px;
            padding-bottom: 60px;

            input {
              margin-bottom: 30px;
              padding: 15px 10px;
              border-radius: 5px;
              border: none;
              outline: none;
            }

            .submit {
              margin-top: 20px;
              padding: 10px 45px;
              text-align: end;
            
            }

            textarea {
              margin-bottom: 5px;
            }

            label {
              font-size: 14px;
              font-weight: 400;
              display: inline-block;
              margin-left: 5px;
              margin-bottom: 5px;
            }

            textarea {
              background-color: #fff;
              outline: none;
              border: none;
              padding: 20px 15px;
              border-radius: 5px;
              resize: none;
            }
          }
        }
      }
    }
  `;

  return (
    <Container>
      <div className="admingen">
        <div className="gen1">
          <AdminSidebar />
        </div>
        <div className="gen2">
          <AdminNavbar />

          <div className="create">
            <form action="">
              <label htmlFor="tt"> Title </label> <br />
              <input
                type="text"
                name=""
                id="tt"
                placeholder="Title"
                size={82}
              />{" "}
              <br />
              <label htmlFor="sd">Author Name</label> <br />
              <input
                type="text"
                name=""
                id="an"
                placeholder="Author Name"
                size={82}
              />{" "}
              <br />
              <label htmlFor="sd">Short Description</label> <br />
              <textarea
                name=""
                id="sd"
                cols="80"
                rows="10"
                className="desc1"
                placeholder="Short Description..."
              ></textarea>{" "}
              <br /> <br />
              <label htmlFor="ld">Main Content</label> <br />
              <textarea
                name=""
                id="ld"
                cols="80"
                rows="10"
                className="desc2"
                placeholder="Main Content..."
               ></textarea>{" "}
              <br />
              
              <input type="submit" value="Create" className="submit"/><br /> <br />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateBlog;
