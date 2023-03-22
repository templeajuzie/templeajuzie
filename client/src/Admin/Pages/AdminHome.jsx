import styled from "styled-components";
import AdminNavbar from "../AdminComponents/AdminNavbar";
import AdminSidebar from "../AdminComponents/AdminSidebar";

const HomeAdmin = () => {
  const Container = styled.div`
    .admingen {
      display: grid;
      grid-template-columns: 1fr 5fr;

      .gen1 {
        background-color: #020c1b;
        height: 100vh;
      }

      .gen2 {
        background-color: #ccd6f6;
        height: 100vh;
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
        </div>
      </div>
    </Container>
  );
};

export default HomeAdmin;
