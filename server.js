var express = require('express');
var app = express();
var getpost = require('./routes/getpost.js');

app.listen(8080, function(){
    console.log('서버작동확인')
})

app.get('/', (req, res) => {
    res.send('우리서버 정상작동합니다')
})

app.use('/getpost', getpost)