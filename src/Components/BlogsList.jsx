import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogList = ({ blog }) => {

  const Main = styled.div`
    .sec2 {
      color: #f5f5f5;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;

      h4 {
        padding-bottom: 10px;
      }

      p {
        padding-bottom: 10px;
      }

      h6 {
        padding-bottom: 80px;
      }
      
    }

    .sec2 {
      a {
        color: #f5f5f5;
        text-decoration: none;
      }
    }
  `;

  

  return (
    <Main>
      <div className="sec2">
        {blog.map((blogs) => (
          <div className="blogpreview" key={blogs.id}>
            <Link to={`/blogs/${blogs.id}`}>
            <h4> {blogs.title} </h4>
            <p> {blogs.description} </p>
            <h6> {blogs.author} </h6>
            </Link>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default BlogList;
