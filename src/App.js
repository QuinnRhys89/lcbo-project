import React, { Component } from "react";

import { fetchLcboEndpoint } from "./api/lcbo.js";
import SearchForm from "./searchform.js";

class App extends Component {
  componentDidMount() {
    // example of making an API request to the LCBO API
    lcboapi.com/products("products", {
      q: "radler"
    }).then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
