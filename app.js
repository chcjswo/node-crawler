const express = require('express');
const router = require('./routes');

const app = express();

// //////////// router 설정 //////////////////////
app.use(router);
// //////////////////////////////////////////////

app.listen(3000,  () => {
    console.log('app listening on port 3000!');
});
