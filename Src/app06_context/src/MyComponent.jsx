import React from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent(props) {
  return (
    <ThemeContext.Consumer>
      {(context) => <div style={{backgroundColor: context.themeColor}}>
        <br/>
        <br/>
        <br/>

        <button>Theme={context.themeColor}</button>
        <br/>
        <br/>
        <br/>
        </div>}
    </ThemeContext.Consumer>
  );
}

export default MyComponent;
