const cheerio = require('cheerio');

const searchUrl = 'http://zum.com/#!/home';

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        // 결과 정보 배열
        const results = [];
        const $ = cheerio.load(body);
        // 검색 결과 태그
        const searchTag = $('div.issue_keyword_wrap > div.issue_keyword > ul > li > a');

        searchTag.each((index, item) => {
            const result = {};
            result.text = `${index + 1}위 ${$(item).text().replace(/\n/gi, '')}`;
            result.query = $(item).attr('href');
            results.push(result);
        });

        return results;
    }
};

module.exports = {
    searchUrl,
    search
};
