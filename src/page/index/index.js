var cats = require('./cats.js');
var common = require('../common.js');
var $ = require('jquery');

require('./index.css');

common();

console.log(cats);
$('body').html("羊驼不是草泥马")