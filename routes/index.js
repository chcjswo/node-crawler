const express = require('express');

const router = express.Router();

const naver = require('../sites/naver');
const melon = require('../sites/melon');
const daum = require('../sites/daum');
const zum = require('../sites/zum');
const search = require('../searchWord');

router.get('/all', (req, res) => {
    res.json(200);
});

router.get('/naver', async (req, res) => {
    const searchList = await search.search(naver.searchUrl, naver.search);

    res.json(searchList);
});

router.get('/daum', async (req, res) => {
    const searchList = await search.search(daum.searchUrl, daum.search);

    res.json(searchList);
});

router.get('/zum', async (req, res) => {
    const searchList = await search.search(zum.searchUrl, zum.search);

    res.json(searchList);
});

router.get('/melon', async (req, res) => {
    const searchList = await search.search(melon.searchUrl, melon.search);

    res.json(searchList);
});

router.get('/nate', async (req, res) => {
    // const searchList = await search.search(nate.searchUrl, nate.search);

    res.json({});
});

module.exports = router;
