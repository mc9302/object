
var Mock=require("mockjs");

Mock.mock("/sss/csss",'get',require("./json/data"));
Mock.mock('user/shop','get',require('./json/shop'))
Mock.mock('user/shopcart','get',require('./json/shopcart'))
