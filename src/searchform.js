import React, { Component } from "react";
import { fetchLcboEndpoint } from "./api/lcbo.js";
import Product from "./Product.js";

class SearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            submit: '',
            products: []
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getDrink(" ");
    }

    getDrink(product){
        fetchLcboEndpoint("products", {
            q: `${product}`
        }).then(data => {
            console.log(data);
            this.setState({
                products: data.result
            });
            console.log(this.state.products, "data results");
        });
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

        this.getDrink(this.state.search);
    }

    render(){
        return (
        <div>
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.search} placeholder="Enter a drink here" onChange={this.updateSearch} />
                <input type="submit" />
            </form>
            <section>
                {this.state.products.map((product, i) => {
                        return <Product key={i} name={product.name} id={product.id} bottle={product.package} price={product.price_in_cents} url={product.image_thumb_url}/>
                })}
                
            </section>
        </div>
          )
    }


}

export default SearchForm;