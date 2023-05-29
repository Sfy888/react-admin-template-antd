import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.allPrise = 0
    }
    getProducts(products) {
        return products.map(product => {
            return <p key={product.id}>{product.title + '==========' + product.id}</p>
        })
    }
    render() {
        return (
            <div>{this.getProducts(this.props.products)}</div>
        )
    }
}