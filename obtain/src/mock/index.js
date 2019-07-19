var Mock=require("mockjs");

Mock.mock("/mock/data",'get',require("./json/data"));