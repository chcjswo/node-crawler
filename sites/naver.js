const cheerio = require('cheerio');

const searchUrl = 'https://www.naver.com/srchrank?frm=main&ag=40s&gr=1&ma=-2&si=0&en=0&sp=0';
const queryUrl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_lve&ie=utf8&query=';

const search = (error, response, body) => {
    if (!error && response.statusCode === 200) {
        // 결과 정보 배열
        const results = [];

        const data = JSON.parse(body);
        data.data.forEach(item => {
            const result = {};
            result.text = `${item.rank}위 - ${item.keyword}`;
            result.query = `${queryUrl}${encodeURI(item.keyword)}`;
            results.push(result);
        });

        return results;
    }
};

module.exports = {
    searchUrl,
    search
};
