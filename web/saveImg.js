/*
 * @Author: 方小宇
 * @Date: 2021-04-26 17:07:45
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-26 17:08:02
 * @Description: 大威天龙,宇哥出马,没有bug
 */
const path = require('path');
const fs = require('fs');


/**
 * 
 * base64->图片
 */
exports.transferToImg = (ctx) => {

    //接收前台传递的参数   base64格式的图片数据,图片名称
    const { imgData, layout_id } = ctx.request.body;


    //过滤data:URL
    let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    let dataBuffer = Buffer.from(base64Data, 'base64');


    const allowExtname = ['png', 'jpg', 'jpeg', 'webp', 'bmp'];//支持的图片格式

    //获取扩展名
    let extname = '';
    let filterResult=allowExtname.filter(item => {
        return imgData.includes(item)
    })
    extname='.'+filterResult[0]

    //指定目标存放路径
    let targetPath = path.resolve(__dirname, '../temp')//自定义文件夹

    // 写入图片
    fs.writeFileSync(`${targetPath}/${layout_id}${extname}`, dataBuffer)

  


}
