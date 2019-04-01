const request = require('request');
const cheerio = require('cheerio');

const options = {
    url: 'https://www.naver.com',
    headers: {
        'User-Agent': 'request'
    }
};

const callback = ((error, response, body) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        const search = $('.ah_roll_area  > .ah_l > .ah_item > a > .ah_k');
        search.each((index, item) => {
            console.log(`${index + 1} - ${$(item).text()}`);
        });
    }
});

request(options, callback);
