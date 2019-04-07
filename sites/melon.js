const cheerio = require('cheerio');

const searchUrl = 'http://www.melon.com/chart/';

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        // 결과 배열
        const results = [];
        // 곡 타이틀 배열
        const titleInfo = [];
        // 가수 배열
        const artistInfo = [];
        const $ = cheerio.load(body);

        // 곡 정보 만들기
        $('.ellipsis.rank01 > span > a').each(function() {
            titleInfo.push($(this).text());
        });

        // 가수 정보 만들기
        $('.checkEllipsis > a').each(function() {
            artistInfo.push($(this).text());
        });

        // 결과 만들기
        for (let i = 0; i < 10; i++) {
            results.push(`${i + 1}위 ${titleInfo[i]} - ${artistInfo[i]}`);
        }

        return results;
    }
};

module.exports = {
    searchUrl,
    search,
};
