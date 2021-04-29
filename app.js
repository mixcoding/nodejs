/*
 * @Author: 方小宇
 * @Date: 2021-04-28 09:54:17
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-28 10:50:05
 * @Description: 大威天龙,宇哥出马,没有bug
 */

let OSS = require('ali-oss');
var path = require("path")

let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI5tMku64CNrPuFzESvtTX',
  accessKeySecret: 'zgVamhjr994jfTrpYbSRI61r9UiXR1',
//   bucket: 'huiyitong-fxy',
});

async function listBuckets () {
    try {
      let result = await client.listBuckets();
    } catch(err) {
      console.log(err)
    }
  }
  
//   listBuckets();            

client.useBucket('examplebucket');
  // 查看列表文件
async function list () {
  try {
    let result = await client.list({
      'max-keys': 5
    })
    console.log(result)
  } catch (err) {
    console.log (err)
  }
}
// list();


// 上传文件



async function put () {
  try {
    let result = await client.put('1.png', 'C:\\Users\\fxycoding\\Desktop\\img\\1.png');
    console.log('23',result);
   } catch (err) {
     console.log (err);
   }
}

put();


// 下载文件


async function get () {
  try {
    let result = await client.get('2.png');
    console.log('----',result);
  } catch (err) {
    console.log ('====',err);
  }
}
// get()



async function deletes() {
  try {
    let result = await client.delete('1.png');
    console.log(result);
  } catch (err) {
    console.log (err);
  }
}

