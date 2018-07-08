import React, { Component } from "react";
import { fetchLcboEndpoint } from "./api/lcbo.js";
import Map from "./map.js";

class Product extends Component {
    constructor(){
        super();
        this.state = {
            productId: '',
            coordinates: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStore = this.getStore.bind(this);
    }

    getStore(id){
        console.log(id);
        fetchLcboEndpoint("stores", "product_id", {
            q: `${id}`
        }).then(data => {
            const coordinates = data.result.map(product => {
                return [product.latitude, product.longitude]
            }); 

            this.setState({
                coordinates
            });
            console.log(this.state.coordinates[0][0]);
        });
    }


    handleSubmit(e){
        e.preventDefault();
        this.setState({
            productId: this.props.id
        })
        this.getStore(this.state.productId);
        console.log(this.props.id);

    }

    render(){
        return <div>
            <h2>{this.props.name}</h2>
            <p>Id: {this.props.id}</p>
            <img src={this.props.url} alt="" />
            <p>{this.props.bottle}</p>
            <p>Price: {this.props.price}</p>
            <form action="" onSubmit={this.handleSubmit}>
              <input type="submit" value="Find Store" />
            </form>
            <Map coordinates={this.state.coordinates}/>
        </div>
    }
}

export default Product;