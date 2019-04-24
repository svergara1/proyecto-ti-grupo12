const express = require('express');
const apiCallFromRequest = require('./Request')

const app = express();

const productRoutes = require('./api/routes/products')

app.use('/products', productRoutes);

const http = require('http')

http.createServer((req, res) => {
    if (req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            console.log(JSON.stringify(response));
            res.write(JSON.stringify(response));
            res.end();
        });
    }
}).listen(3000);

module.exports = app;