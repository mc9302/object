const  Mock=require('mockjs')
Mock.mock("/link/data",'get',require("./json/data"));