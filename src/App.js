import React, { Component } from "react";
import "./index.css";
import TextBox from "./componets/TextBox/TextBox";
import InputBox from "./componets/InputBox/InputBox";

class App extends Component {
  state = {
    Article: "",
    Title: "",
  };

  submit = (UserTitle, UserArticle) => {
    this.setState({
      Title: UserTitle,
      Article: this.state.Article + UserArticle,
    });
  };
  Clear = () => {
    this.setState({ Article: "" });
  };

  render() {
    return (
      <div className="App">
        <TextBox Article={this.state.Article} Title={this.state.Title} />
        <InputBox Submit={this.submit} clear={this.Clear} />
      </div>
    );
  }
}

export default App;
