import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      text-decoration: none;
      list-style: none;
      box-sizing: border-box;
      
      &:focus {
        outline: 0;
      }
    }
    
    img {
      max-width: 100%;
      vertical-align: top;
    }
    
    html. body {
      height: 100%;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1;
      &.fixed {
        overflow: hidden;
      }
    }

    * {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 13px;
    }
    
    button {
      border: 0;
      cursor:pointer;
    }
`;