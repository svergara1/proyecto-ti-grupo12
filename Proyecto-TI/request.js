const request = require('request');

_EXTERNAL_URL = 'https://integracion-2019-dev.herokuapp.com/bodega';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, {json: true}, (err, res, body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;