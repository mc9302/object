const Mock = require('mockjs');
Mock.mock('user/shop','get',require('./json/shop'))
Mock.mock('user/shopcart','get',require('./json/shopcart'))