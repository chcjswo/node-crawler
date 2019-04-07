const request = require('request');
const naver = require('./sites/naver');
const melon = require('./sites/melon');
const daum = require('./sites/daum');
const zum = require('./sites/zum');
const nate = require('./sites/nate');

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
};

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

async function exec()  {
    const naverList = await search(naver.searchUrl, naver.search);
    const melonList = await search(melon.searchUrl, melon.search);
    const daumList = await search(daum.searchUrl, daum.search);
    const zumList = await search(zum.searchUrl, zum.search);
    const nateList = await search(nate.searchUrl, nate.search);

    // console.log(naverList);
    // console.log(melonList);
    // console.log(daumList);
    // console.log(zumList);
    console.log(nateList);

    // searching(searchUrl[0], tag[0], queryUrl[0]);
    // nateSearching(searchUrl[1], tag[1], queryUrl[1]);
    // searching(searchUrl[2], tag[2], queryUrl[2]);
    // searching(searchUrl[3], tag[3], queryUrl[3]);
}

exec();
