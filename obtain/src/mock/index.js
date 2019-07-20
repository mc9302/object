
const  Mock=require('mockjs')
Mock.mock("/link/data",'get',require("./json/data"));

Mock.mock("/mock/data",'get',require("./json/data"));

Mock.mock("/sss/csss",'get',require("./json/dataOne"));
Mock.mock('user/shop','get',require('./json/shop'))
Mock.mock('user/shopcart','get',require('./json/shopcart'))
