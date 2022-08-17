import styled from "styled-components";
import BlogList from "../Components/BlogsList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useFetch from "../Components/useFetch";

const Blog = () => {

  const {data: blog, Is_pending} = useFetch('http://localhost:8080/blogs');

  const Body = styled.div`
    background-color: #020c1b;
    padding: 20px 90px;

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


  
  return (
    <>
      <Navbar />

      <Body>
        <div className="sec1">
          <h4>Blog Feed</h4>
          <p> Stay in touch! </p>
        </div>

        <div className="sec2">
          {Is_pending && <p>Loading...</p>}
           {blog && <BlogList  blog={blog} />}
        </div>
      </Body>

      <Footer />
    </>
  );
};

export default Blog;
