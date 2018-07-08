import React, { Component } from "react";
import SearchForm from "./searchform.js";

class App extends Component {
  render() {
    return <div>
        <h1>LCBO Drinks Near You</h1>
        <SearchForm />
      </div>;
  }
}

export default App;
