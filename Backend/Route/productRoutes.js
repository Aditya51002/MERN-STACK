const express = require('express');
const route = express.Router();

let productData = [];

route.post('/product-post', (req, res) => {
    try {
        const { pro_name, pro_price, pro_quantity } = req.body;

        productData.push({pro_name,pro_price,
            pro_quantity
        });

        res.status(201).json({
            data: productData,
            msg: "Data created successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
            msg: "Internal server error"
        });
    }
});

route.get('/products', (req, res) => {
    try {
        res.status(200).json({
            data: productData,
            msg: "All products fetched successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
            msg: "Internal server error"
        });
    }
});

module.exports = route;
