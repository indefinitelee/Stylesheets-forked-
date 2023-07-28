import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loading from "../Loading";

const html = `
<div class="policies">
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <p>paragraph</p>
  <div class="static-classname">
    <h4>Static Class</h4>
  </div>
</div>
`;

const Head = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const headStylesheet = document.querySelector("#headstyle");
    document.addEventListener("onload", headStylesheet);
    headStylesheet.onload = function() {
      setLoading(false);
    };

    return () => {
      document.removeEventListener("onload", headStylesheet);
    };
  }, [isLoading]);

  return (
    <>
      <Helmet>
        <link id="headstyle" rel="stylesheet" type="text/css" href="head.css" />
      </Helmet>
      {!isLoading ? (
        <>
          <h1>Head Stylesheet</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
      ) : (
        <div>
          <Loading opacity="1" height={400} width={400} />
        </div>
      )}
    </>
  );
};

export default Head;
