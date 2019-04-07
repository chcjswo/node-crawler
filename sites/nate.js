const cheerio = require('cheerio');

const searchUrl = 'https://www.naver.com';
const queryUrl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_lve&ie=utf8&query=';

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        // 결과 정보 배열
        const results = [];
        const $ = cheerio.load(body);
        // 검색 결과 태그
        const searchTag = $('.ah_roll_area  > .ah_l > .ah_item > a > .ah_k');

        searchTag.each((index, item) => {
            if (index > 9) {
                return false;
            }

            const result = {};

            result.text = `${index + 1}위 ${$(item).text()}`;
            result.query = `${queryUrl}${encodeURI($(item).text())}`;

            results.push(result);
        });

        return results;
    }
};

module.exports = {
    searchUrl,
    search
};
