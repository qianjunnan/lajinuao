'use strict'

require('./index.css');
require('../common/nav-simple/index.js');

var _mm = require('util/mm.js');

$(function(){
	// 通过浏览器地址栏获取参数,后拼接成class进$()里选择
	var type = _mm.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
		// 显示对应的提示
		$element.show();
})