import React from "react";

const html = `
<div class="policy">
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <p>paragraph</p>
  <div class="static-classname">
    <h4>Static Class</h4>
  </div>
</div>
`;

const Global = () => (
  <>
    <h1>Global Stylesheet</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
);

export default Global;
