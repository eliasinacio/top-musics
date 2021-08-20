import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  max-width: 1024px;
  
  border-collapse: separate;
  border-spacing: 0 8px;

  text-align: left;
  user-select: none;

  thead {
    th {
      font-weight: 300;
      font-size: 0.9rem;
      padding: 5px 0 5px; 
      margin: 0;
      border-bottom: 0.1rem solid #dddddd66;
    }

    #play { 
      width: 5%;
      padding-right: 5px;
    }

    #title {
      color: white;
      width: 45%;
      
      #artist { color: black; }
    }

    #album { width: 35%; }
    #favorite { width: 5%; }
    #duration {
      width: 10%;
      text-align: center;
    }
  }
  
  tbody {
    .play-btn { 
      img { 
        cursor: pointer; 
        display: none; 
        img:hover { display: block; }
      }
    }

    a {
      text-decoration: none;
      color: #CCC;

      &:hover { color: #FFF; }
    }

    .track { 
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px 0;
      
      color: #FFF; 
      font-weight: 500;

      img {
        max-width: 52px;
      }
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
      
      .fill { display: none; }
      .empty { opacity: 0.8; }
      
      &.favorited {
        .fill { display: inline; }
        .empty { display: none; }
      }

      img { cursor: pointer; }
    }

    tr:hover {
      background-color: #43434343;
    }
  }
`;