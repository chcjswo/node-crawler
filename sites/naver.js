const cheerio = require('cheerio');

const queryUrl = [
    'https://search.naver.com/search.naver?where=nexearch&sm=top_lve&ie=utf8&query=',
    'https://search.daum.net/nate?w=tot&q=',
    'https://search.daum.net/search?w=tot&DA=ATG&rtmaxcoll=1TH&q=',
    'http://search.zum.com/search.zum?qm=g_real1.top&real1_id=1&method=uni&option=accu&query=',
];

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        const search = $('.ah_roll_area  > .ah_l > .ah_item > a > .ah_k');
        const results = [];
        search.each((index, item) => {
            if (index > 9) {
                return false;
            }

            const result = {};

            const rank = index + 1;
            const text = $(item).text();
            const query = `${queryUrl[0]}${encodeURI(text)}`;

            result.rank = rank;
            result.text = text;
            result.query = query;

            results.push(result);

            console.log(`${rank} - ${text}`);
            console.log(query);
        });

        return results;
    }
};

module.exports = {
    search
}
