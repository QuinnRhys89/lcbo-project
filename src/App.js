import React, { Component } from "react";

import { fetchLcboEndpoint } from "./api/lcbo.js";
import SearchForm from "./searchform.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      lcboData: []
    }
  }

  componentDidMount(product) {
    // example of making an API request to the LCBO API
    fetchLcboEndpoint("products", {
      q: `{product}`
    }).then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h1>LCBO Drinks Near You</h1>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
