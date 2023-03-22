import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Progress from "./Progess";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const Main = styled.div`
    color: aliceblue;
    padding: 20px 80px;

    .sec1 {
      display: flex;
      justify-content: space-between;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;
      margin-bottom: 40px;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
      }

      p {
        color: #f5f5f5;
      }
    }
  `;

  const { id } = useParams();

  const {data: blog, Is_pending } = useFetch('http://localhost:8080/blogs/' + id);

  return (
    <>

      <Main>
        <div className="sec1">
         
          {blog && ( <h4>{blog.title} </h4>)}
          <p> 10 Sept 2022 </p>
        </div>

        <div className="sec2">
             { Is_pending && <div> <Progress />  </div>} 
             {blog && (
                <article>
                   
                    <p>Wtitten by {blog.author}</p>
                    <p>{blog.description}</p>
                </article>
             )}
        </div>
      </Main>

      {/* <Footer /> */}
    </>
  );
};

export default BlogDetails;
