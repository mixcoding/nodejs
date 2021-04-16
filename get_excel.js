var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var sheets = xlsx.parse(__dirname+'/issue/test.xlsx');
var excelObj=sheets[0].data;
// console.log('------',excelObj);

var data;
sheets.forEach(sheet => {
    // 获取整个excel中的数据
    const data = sheet['data']
    // 将需要的列数据组装成数组
    for(let rowId in data){
        const row = data[rowId]
        let obj ={};
        for(let i in row){
            obj.title = row[0]
            obj.content = row[1]
        }
        data.push(obj)   
    }
})

var buffer = xlsx.build([
  {
    name:'sheet1',
    data:data
  }
]);
// 将文件内容插入新的文件中
// console.log();
// fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
module.exports = {data};
