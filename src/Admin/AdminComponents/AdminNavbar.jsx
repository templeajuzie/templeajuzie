import { Badge } from "@material-ui/core";
import { Notifications, Search } from "@material-ui/icons";
import styled from "styled-components";
import propic from "../../Resources/Images/propic.jpg";

const AdminNavbar = () => {
  const AdminNavgen = styled.div`
  margin: 0;
  padding: 0;
  position: sticky;
        top: 0;
        z-index: 0;
  

    .nav {
      display: grid;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 20px;
      background: #ccd6f6;
      border-bottom: 1px solid #748594;

      .nav1 form {
        display: flex;
        align-items: center;
        background: #fff;
        padding: 7px;
        border-radius: 25px;

        input {
          outline: none;
          border: none;
          margin: 0 10px;
        }

        .iconsearch {
          margin-right: 10px;
        }
      }

      .nav2 {
        display: flex;
        align-items: center;

        img {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          margin-left: 30px;
        }

        p {
          margin-left: 30px;
          font-size: 14px;
          font-weight: 450;
          margin-right: 30px;
        }
      }
    }
  `;

  return (
    <>
      <AdminNavgen>
        <div className="nav">
          <div className="nav1">
            <form action="">
              <input
                type="search"
                name=""
                placeholder="Search here..."
                id=""
                size={40}
              />
              <Search className="iconsearch" />
            </form>
          </div>

          <div className="nav2">
            <p>Hello, Temple! 👋 </p>

            <Badge badgeContent={2} color="primary">
              <Notifications />
            </Badge>

            <img src={propic} alt="" />
          </div>
        </div>
      </AdminNavgen>
    </>
  );
};

export default AdminNavbar;
