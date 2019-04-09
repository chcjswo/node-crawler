const request = require('request');

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
};

const search = (url, callback) =>  {
    const options = {
        url,
        headers: HEADERS
    };

    return new Promise(function(resolve, reject) {
        request.get(options, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(callback(error, response, body));
            }
        })
    });
};

module.exports = {
    search
};
