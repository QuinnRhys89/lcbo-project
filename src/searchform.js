import React, { Component } from "react";

class SearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateSearch(e) {
        e.target.value;
        console.log(e.target.value);
        this.setState({
            search: e.target.value.substr(0,20)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.value;
        console.log('I was clicked');
        console.log(e.target.value);
        // componentDidMount("radler");
    }

    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.search} placeholder="Enter a drink here" onChange={this.updateSearch}/>
                <input type="submit"/>
            </form>
        )
    }


}

export default SearchForm;