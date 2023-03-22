import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Progress = () => {


  const Container = styled.div`
    .progress {
      color: #0ff;
    }
  `;
  return (
    <Container>
      <CircularProgress className="progress" />{" "}
    </Container>
  );
};

export default Progress;
