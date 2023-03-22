import styled from "styled-components";

const BlogList = ({ blog }) => {
  const Main = styled.div`
    .sec2 {
      color: #f5f5f5;
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      .blogpreview {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .a {
          img {
            width: 420px;
            height: auto;
            border-radius: 5px;
          }
        }

        .b {
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 15px;

          h6 {
            color: #fff;
            font-size: 13px;

            span {
              color: #0ff;
            font-size: 13px;
            font-family: "Satisfy", cursive;
            }

          }


          h4 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 10px;
            width: 550px;
          }

          button {
            outline: none;
            margin: 0;
            width: fit-content;
            color: #0ff;
            background-color: transparent;
            border: 1.5px solid #0fff;
            padding: 5px 13px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 1s ease-in-out;

            :hover {
              background-color: #0ff;
              color: #000;
              cursor: pointer;
              transform: scale(1.1);
            }
          }
        }
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
            <div className="a">
              <img src={blogs.img} alt="" />
            </div>

            <div className="b">
              <h6> Author: <span> {blogs.author} </span>  </h6>
              <h4> {blogs.title} </h4>
              <p> {blogs.description} </p>
              <button onClick={() => {
               
              }}> Read More</button>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default BlogList;
