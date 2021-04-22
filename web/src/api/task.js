/*
 * @Author: 方小宇
 * @Date: 2021-04-21 16:18:03
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-21 16:36:54
 * @Description: 大威天龙,宇哥出马,没有bug
 */
import request from '@/untils/request.js';


export function getExcel (data) {
  return request({
    url: '/getExcel',
    method: 'get',
    data
    }
  )
}