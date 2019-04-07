const cheerio = require('cheerio');

const searchUrl = 'https://www.daum.net';

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        // 결과 정보 배열
        const results = [];
        const $ = cheerio.load(body);
        // 검색 결과 태그
        const searchTag = $('ol.list_hotissue.issue_row.list_mini > li > div > div > span.txt_issue > a.link_issue');

        searchTag.each((index, item) => {
            const result = {};

            result.text = `${index + 1}위 ${$(item).text()}`;
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
