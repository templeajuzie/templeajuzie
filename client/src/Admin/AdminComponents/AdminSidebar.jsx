import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  BarChartSharp,
  Dashboard,
  Description,
  MailOutline,
  Settings,
} from "@material-ui/icons";
import { MdLogout } from "react-icons/md";

const AdminSidebar = () => {
  const Sidebargen = styled.div`
    margin: 0;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 0;

    .nav {
      padding-top: 20px;

      a {
        text-decoration: none;
        padding-left: 15px;
        color: #ffff;
        font-size: 28px;
        font-weight: 20px;
        letter-spacing: 1px;
        font-family: "Satisfy", cursive;

        span {
          color: #0ff;
          font-family: "Satisfy", cursive;
        }
      }
    }

    .admincat {
      color: aliceblue;
      margin-top: 70px;

      ul {
        list-style: none;

        .line {
          border: 0.2px solid gray;
          opacity: 90;
          padding: 0px 15px;
          margin-bottom: 15px;
        }

        li {
          display: flex;
          align-items: center;
          padding-left: 25px;
          padding: 11px 15px;
          margin-bottom: 20px;

          a {
            font-size: 14px;
            margin-left: 20px;
            text-decoration: none;
            color: aliceblue;
          }          

          :hover {
            background: #efefef;
            border-right: 3px solid #05bdbd;
            color: #020c1b;
            a {
              font-weight: 500;
              color: #020c1b;
            }
          }

          
        }

        
      }
    }
  `;
  return (
    <>
      <Sidebargen>
        <div className="nav">
          <NavLink to="/admin">
            {" "}
            Temple<span>-AJ</span>{" "}
          </NavLink>
        </div>

        <div className="admincat">
          <ul>
            <li>
              <Dashboard />
              <NavLink to="/admin"> Dashboard </NavLink>
            </li>

            <li>
              <Description />
              <NavLink to="/admin"> Blog Post </NavLink>
            </li>

            <li>
              <MailOutline />
              <NavLink to="/admin"> Message </NavLink>
            </li>

            <li>
              <BarChartSharp />
              <NavLink to="/admin"> Statistics </NavLink>
            </li>

            <div className="line"></div>

            <li>
              <Settings />
              <NavLink to="/admin"> Settings </NavLink>
            </li>

            <li>
              <MdLogout />
              <NavLink to="/admin"> Log Out </NavLink>
            </li>
          </ul>
        </div>
      </Sidebargen>
    </>
  );
};

export default AdminSidebar;
