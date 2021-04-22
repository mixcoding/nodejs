/*
 * @Author: 方小宇
 * @Date: 2021-04-12 11:23:48
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-21 14:23:44
 * @Description: 大威天龙,宇哥出马,没有bug
 */
var xlsx = require('node-xlsx');
var fs = require('fs');

var excel = xlsx.parse(__dirname+'/issue/test.xlsx');
var excelObj=excel[0].data;


var data = [];
for(var i in excelObj){
  var arr=[];
  var value=excelObj[i];
  for(var j in value){
    console.log('22',value[j])
    arr.push(value[j]);
  }
  data.push(arr);
}



module.exports = {data};
