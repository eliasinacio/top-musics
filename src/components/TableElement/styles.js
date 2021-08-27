import styled from "styled-components";

export const Container = styled.tr`
  .play-btn { 
    button {
      background-color: transparent;
      padding: 0;

      img { 
        cursor: pointer; 
        padding: 5px;
      }
    }
  }

  a {
    text-decoration: none;
    color: #CCC;

    &:hover { color: #FFF; }
  }

  .track { 
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 5px 0;
    
    color: #FFF; 
    font-weight: 500;

    div { padding-top: 10px; }

    img { max-width: 92px; }
  }

  .artist {
    font-size: 0.9rem;
    font-weight: 400;
    color: #CCC;
      
    &:hover { color: #FFF; }
  }

  .duration { text-align: center; }

  .favorite-btn {
    text-align: center;
    padding: 0 5px;
    
    .fill { display: none; }
    .empty { opacity: 0.8; }
    
    &.favorited {
      .fill { display: inline; }
      .empty { display: none; }
    }

    img { cursor: pointer; }
  }

  &:hover {
    background-color: #43434343;
    .play-btn img { display: table-cell; }
  }
`