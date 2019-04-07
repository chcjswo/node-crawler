const client = require('cheerio-httpcli');
const request = require('request');

const naver = require('./sites/naver');
const melon = require('./sites/melon');

const results = [];

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
};

const searchUrl = [
    'https://www.naver.com',
    // 'http://search.daum.net/nate?thr=sbma&w=tot&q=b',
    'http://www.nate.com/nate/LiveKeyword',
    'https://www.daum.net',
    'http://zum.com/#!/home',
];
const tag = [
    '.ah_roll_area  > .ah_l > .ah_item > a > .ah_k',
    'div#keywordRank > div.kwd_list',
    // '#ratIssueColl > div.coll_cont > div > ol',
    // '#mArticle > div.cmain_tmp > div.section_media > div.hotissue_builtin > div.realtime_part > ol > li:nth-child(1) > div > div:nth-child(1) > span.txt_issue > a > .link_issue',
    'ol.list_hotissue.issue_row.list_mini > li > div > div > span.txt_issue > a.link_issue',
    '.issue_keyword.d_rank_keyword > ul > li > .d_btn_keyword.d_ready',
];
const queryUrl = [
  'https://search.naver.com/search.naver?where=nexearch&sm=top_lve&ie=utf8&query=',
  'https://search.daum.net/nate?w=tot&q=',
  'https://search.daum.net/search?w=tot&DA=ATG&rtmaxcoll=1TH&q=',
  'http://search.zum.com/search.zum?qm=g_real1.top&real1_id=1&method=uni&option=accu&query=',
];

// const searchCallback = [
//     naverSearch,
//     naverSearch,
//     naverSearch,
//     naverSearch
// ];

// const searching = (url, tag, searchUrl) => {
//     client.fetch(url, (err, $, res) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const search = $(tag);
//         console.log(search.length);
//         // console.log('search ===> ', search);
//
//         search.each((index, item) => {
//             if (index > 9) {
//                 return false;
//             }
//
//             const rank = index + 1;
//             const text = $(item).text().replace(/ /gi, '');;
//             // console.log('item ===> ', $(item));
//
//             // console.log(`${rank} - ${text} - ${searchUrl}${encodeURI(text)}`);
//             console.log('item ===> ', $(item).attr('href'));
//             // console.log('item ===> ', $(item).text());
//             // console.log('item ===> ', $(item).href);
//             // console.log(`${index + 1} - ${$(item).text()}`);
//             // console.log(`${searchUrl}${encodeURI($(item).text())}`);
//
//         });
//     });
// };
// const nateSearching = (url, tag, searchUrl) => {
//     const options = {
//         url,
//         headers: {
//             'User-Agent': 'request'
//         },
//         encoding: 'utf-8'
//     };
//
//     const callback = (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             const data = iconv.decode(body, 'utf-8');
//             console.log(data);
//         }
//     }
//
//     request(options, callback);;
// };

main();

function search(url, callback)  {
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

async function main()  {
    // search(searchUrl[0], searchCallback[0]);
    // search(searchUrl[0], searchCallback[0])
    //     .then(result => {
    //         // console.log(result);
    //
    //         console.log(results);
    //     });
    // naver((err, ret) => {
    //     if (err) throw err;
    //
    //     console.log(results);
    //     console.log('aaaa');
    // });

    const naverList = await search(naver.searchUrl, naver.search);
    const melonList = await search(melon.searchUrl, melon.search);

    console.log(naverList);
    console.log(melonList);

    // searching(searchUrl[0], tag[0], queryUrl[0]);
    // nateSearching(searchUrl[1], tag[1], queryUrl[1]);
    // searching(searchUrl[2], tag[2], queryUrl[2]);
    // searching(searchUrl[3], tag[3], queryUrl[3]);
}
