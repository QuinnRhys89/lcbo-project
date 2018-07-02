import React, { Component } from "react";

const Product = (props) => (
    <div>
        <h2>{props.name}</h2>
        <p>Id: {props.id}</p>
        <img src={props.url} alt=""/>
        <p>{props.bottle}</p>
        <p>Price: {props.price}</p>
        <button>Find LCBO Store</button>
    </div>
);

export default Product;