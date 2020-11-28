//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ThemeContext } from "./ThemeContext";
import MyComponent from "./MyComponent";



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeColor: "#fff"
    };
  }

  changeColor = () => {
    this.setState(function (prevState, props) {
      let st = {};
      if (prevState.themeColor === "#fff") st = { themeColor: "#F0F8FF" };
      else st = { themeColor: "#fff" };
      return st;
    });
  };

  changeColor2 = () => {
    this.setState({ themeColor: "#F0F8FF" });
    
  };

  render() {
    return (
      <div className="App">
        <h2>using react context</h2>
        <ThemeContext.Provider value={this.state}>
          <MyComponent />

          <br />
          <br />
          <br />
        </ThemeContext.Provider>

        <button onClick={this.changeColor}>change context</button>
      </div>
    );
  }
}

