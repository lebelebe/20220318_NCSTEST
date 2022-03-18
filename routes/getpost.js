var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../db/config.js')
var connection = mysql.createConnection(dbconfig);

router.get('/', (req, res) => {
    res.send('/getpost set go')
})
router.post('/post', (req, res)=> {
    res.send({
        'test':'/getpost/post 확인',
        'content':'잘 나오네'
    })
})
router.get('/sqlcontent', (req, res) => {
    connection.query(
        'SELECT * FROM react_suppose.suppose',
        (error, rows) => {
            if (error) throw error;
            res.send(rows);
        }
    )
})

module.exports = router;