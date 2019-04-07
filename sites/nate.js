const cheerio = require('cheerio');

const searchUrl = 'https://www.nate.com/nate/LiveKeyword';

const search = (error, response, body) => {
    // console.log(response);
    if (!error && response.statusCode === 200) {
        // console.log(body);
        // 결과 정보 배열
        const results = [];
        const $ = cheerio.load(body, {decodeEntities: true});
        // 검색 결과 태그
        const searchTag = $('html');

        searchTag.each((index, item) => {
            const result = {};
            
            const re = /\["[\d]{1,2}",\s"(.*?)",\s/g;

            // console.log(re.exec($(item).text()));

            results.push(result);
        });

        return results;
    }
};

module.exports = {
    searchUrl,
    search
};
