import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100vh;

    background-color: #121212;
    color: #DDD;
    font-family: 'Roboto', ubuntu, sans-serif;

    .App {
      width: 100%;
      padding: 50px 20px;

      display: flex;
      flex-direction: column;
      align-items: center;

      header {
        width: 100%;
        max-width: 1024px;
        padding: 20px;

        h1 {
          color: #FDFDFD;
          font-weight: 300;
          font-size: 3rem;
        }
      }
    }
  }
`;