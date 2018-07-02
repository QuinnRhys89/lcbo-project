import React, { Component } from "react";

class SearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            submit: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateSearch(e) {
        e.preventDefault();
        this.setState({
            search: e.target.value.substr(0,20)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submit: this.state.search
        })
        console.log(this.state.search);
    }

    render(){
        return <form action="" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} placeholder="Enter a drink here" onChange={this.updateSearch} />
            <input type="submit" />
          </form>;
    }


}

export default SearchForm;