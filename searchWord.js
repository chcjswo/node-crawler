const client = require('cheerio-httpcli');
const url = [
    'https://www.naver.com',
    'https://www.nate.com'
];
const tag = [
    '.ah_roll_area  > .ah_l > .ah_item > a > .ah_k',
    '#keywordRank > .kwd_list > ol > li > p > a'
];
const naverSearch = [
  'https://search.naver.com/search.naver?where=nexearch&sm=top_lve&ie=utf8&query=',
  'https://search.daum.net/nate?w=tot&q='
];

const searching = (url, tag, searchUrl) => {
    // console.log(url);
    // console.log(tag);
    // console.log(searchUrl);
    client.fetch(url, (err, $, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const search = $(tag);
        console.log('search ===> ', search);
        search.each((index, item) => {
            console.log('item ===> ', item);
            console.log(`${index + 1} - ${$(item).text()}`);
            console.log(`${searchUrl}${encodeURI($(item).text())}`);
        });
    });
};

main();

function main()  {
    let index = 0;
    // searching(url[0], tag[0], naverSearch[0]);
    searching(url[1], tag[1], naverSearch[1]);
}
