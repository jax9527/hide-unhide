import React, { Component } from 'react';
import Logo from "./logo.png";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'block',
      isToggleOn: true
    };
    this.bindClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(
      prevState => {
        return {
          display: prevState.isToggleOn ? 'none' : 'block',
          isToggleOn: !prevState.isToggleOn
        }
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "關閉圖片" : "打開圖片"}
        </button>
        <div style={{ display: this.state.display }} >
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default App;
