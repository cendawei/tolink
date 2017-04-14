/**
 * Created by cendawei on 2017/4/13.
 */
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'))
    // res.redirect('http://www.baidu.com')
});
app.listen(3000);
console.log("listening on " + '127.0.0.1' + ' : ' + '3000');