import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import BlogList from "../Components/BlogsList";
import Progress from "../Components/Progess";
import useFetch from "../Components/useFetch";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8081/blog")
        .then((respond) => {
          if(!respond.ok){
            throw Error("Error in fetching blog data");
          }
          return respond.json();
        })
        .then((data) => {
          setBlog(data);
          setIsPending(false);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        })
    }, 1000);
  }, []);

  const Body = styled.div`
    background-color: #020c1b;
    padding: 20px 90px;
    color: #fff;

    

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

    .loading {
      color: #f5f5f5;
      text-align: center;
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

       {error && <div> {error} </div>}
        {isPending && (
          <div className="loading">
            {" "}
            <Progress />
            
          </div>
        )}
        <div className="sec2">{blog && <BlogList blog={blog} />}</div>
      </Body>

      <Footer />
    </>
  );
};

export default Blog;
