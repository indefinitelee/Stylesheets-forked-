import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .policy {
    h1 {
      color: #1890ff;
    }
    h2 {
      color: #31708f;
    }
    h3 {
      color: #114678;
    }
    p {
      color: #ebebeb;
      background: #1890ff;
    }

    & .static-classname {
      h4 {
        font-size: 13px;
        color: #000;
      }
    }
  }
`;
