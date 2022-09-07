import {DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";
import AdminNavbar from "../AdminComponents/AdminNavbar";
import AdminSidebar from "../AdminComponents/AdminSidebar";

const AdminBlog = () => {
  const Container = styled.div`
    .admingen {
      display: grid;
      grid-template-columns: 1fr 5fr;

      .gen1 {
        background-color: #020c1b;
        height: auto;
      }

      .gen2 {
        background-color: #ccd6f6;
        height: auto;
        padding-bottom: 65px;

        h1 {
          font-size: 28px;
          margin-top: 40px;
          margin-left: 50px;
        }

        .all {
          margin-top: 30px;
          background: #efefef;
          padding: 20px 20px;
          border-radius: 10px;
          margin-left: 40px;
          width: 610px;
          justify-content: center;

          h3 {
            font-size: 20px;
            cursor: pointer;
          }

          p {
            margin-top: 20px;
            font-size: 14px;
            cursor: pointer;
          }

          .sec2 {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h6 {
              margin-top: 20px;
              font-size: 14px;
            }

            .del {
              cursor: pointer;
              align-items: center;
              font-size: 22px;
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

          <h1>All Blogs</h1>

          <div className="all">
            <h3>The Trojan Strategy In Business</h3>

            <p>
              The skills of striking the giant at night!. All you need to know
              about the Trojan war, and how to implement the strategy into your
              business and Career. The Trojan War is very known in Ancient Greek
              mythology.
            </p>

            <div className="sec2">
              <h6>Author: Temple Ajuzie</h6>
              <DeleteOutline className="del"/>
            </div>
          </div>

          <div className="all">
            <h3>The Trojan Strategy In Business</h3>

            <p>
              The skills of striking the giant at night!. All you need to know
              about the Trojan war, and how to implement the strategy into your
              business and Career. The Trojan War is very known in Ancient Greek
              mythology.
            </p>

            <div className="sec2">
              <h6>Author: Temple Ajuzie</h6>
              <DeleteOutline className="del"/>
            </div>
          </div>

          <div className="all">
            <h3>The Trojan Strategy In Business</h3>

            <p>
              The skills of striking the giant at night!. All you need to know
              about the Trojan war, and how to implement the strategy into your
              business and Career. The Trojan War is very known in Ancient Greek
              mythology.
            </p>

            <div className="sec2">
              <h6>Author: Temple Ajuzie</h6>
              <DeleteOutline className="del"/>
            </div>
          </div>

          <div className="all">
            <h3>The Trojan Strategy In Business</h3>

            <p>
              The skills of striking the giant at night!. All you need to know
              about the Trojan war, and how to implement the strategy into your
              business and Career. The Trojan War is very known in Ancient Greek
              mythology.
            </p>

            <div className="sec2">
              <h6>Author: Temple Ajuzie</h6>
              <DeleteOutline className="del"/>
            </div>
          </div>

          <div className="all">
            <h3>The Trojan Strategy In Business</h3>

            <p>
              The skills of striking the giant at night!. All you need to know
              about the Trojan war, and how to implement the strategy into your
              business and Career. The Trojan War is very known in Ancient Greek
              mythology.
            </p>

            <div className="sec2">
              <h6>Author: Temple Ajuzie</h6>
              <DeleteOutline className="del"/>
            </div>
          </div>

          
        </div>
      </div>
    </Container>
  );
};

export default AdminBlog;
