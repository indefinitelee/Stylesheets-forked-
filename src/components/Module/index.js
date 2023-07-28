import React from "react";
import { policy } from "./styles.module.scss";

const html = `
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <p>paragraph</p>
  <div class="static-classname">
    <h4>Static Class</h4>
  </div>
`;

const Module = () => (
  <>
    <h1>Module Stylesheet</h1>
    <div className={policy} dangerouslySetInnerHTML={{ __html: html }} />
  </>
);

export default Module;
