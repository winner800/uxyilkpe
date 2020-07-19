const fs = require('fs'),
  // http = require("http"),
  // url = require("url"),
  path = require('path'),
  xlsx = require('xlsx');

const args = process.argv.join(' ')

// console.log('args:\n' + args)

let _str = '';
let _time = writeCurrentDate();





// let pathName = 'excel';
// fs.readdir(pathName, function (err, files) {
//   // console.log(files.length)
//   // for (var i=0; i<files.length; i++)
//   // {
//   //    fs.stat(path.join(pathName, files[i]), function(err, data){     
//   //         if(data.isFile())
//   //         {               
//   //             dirs.push(files[i]);
//   //         }
//   //     });
//   // } 
//   // console.log(dirs);  

// });
let retObj = {};

function printLog(_path) {

  let workbook = xlsx.readFile(_path); //workbook就是xls文档对象
  console.log('_path:' + _path)
  let sheetNames = workbook.SheetNames; //获取表明
  // console.log(sheetNames)
  let sheet = workbook.Sheets[sheetNames[0]]; //通过表明得到表对象
  // console.log(sheet)
  var data = xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json
  // console.log(data)
  let str = JSON.stringify(data, null, "\t")
  console.log('--------------start')
  // console.log(data[0])
  let retObjStr = '';
  // let _dataI = data[0];
  // for (let i in _dataI) {
  //   retObj[i] = {
  //     'length': 0,
  //     'list': []
  //   };
  // }
  try {
    data.forEach(element => {
      // console.log(element)
      for (let i in element) {
        if (!retObj.hasOwnProperty(i)) {
          retObj[i] = {
            'length': 0,
            'list': []
          };
        } else {

        }
        if (element[i] != '' && element[i] != '0') {
          retObj[i].list.push(element[i]);
          retObj[i].length++;
        }
      }
    });
  } catch (error) {
    console.log('try error:::-------------\n\n' + error)
  }
  // console.log(retObj)
  // let strTotal = JSON.stringify(retObj, null, "\t")

  // fs.writeFile('excel/20190130.json', strTotal, {}, function (err) {
  // });
  _str += '\n\n\n\n' + _path
  retObjStr += '\n\n\n\n' + _path + '\n<table><tbody>'
  for (let i in retObj) {
    // console.log(i + ':' + retObj[i].length)
    _str += i + ':' + retObj[i].length + '\n';
    retObjStr += '<tr><td>' + i + '</td>' + '<td>' + retObj[i].length + '</td></tr>';
  }
  retObjStr += '</tbody></table>';
  // console.log(JSON.stringify(retObj));
  return {
    'retObj': retObj,
    'retObjStr': retObjStr
  };
}

function writeCurrentDate() {
  var now = new Date();
  var year = now.getFullYear(); //得到年份
  var month = now.getMonth();//得到月份
  var date = now.getDate();//得到日期
  var day = now.getDay();//得到周几
  var hour = now.getHours();//得到小时
  var minu = now.getMinutes();//得到分钟
  var sec = now.getSeconds();//得到秒
  var MS = now.getMilliseconds();//获取毫秒
  var week;
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hour < 10) hour = "0" + hour;
  if (minu < 10) minu = "0" + minu;
  if (sec < 10) sec = "0" + sec;
  if (MS < 100) MS = "0" + MS;
  var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  week = arr_week[day];
  var time = "";
  time = year + "-" + month + "-" + date + "" + " " + hour + ":" + minu + ":" + sec;

  return time;
}


class Application {
  getData() {
    let retStr = '', retObj = []
    const readDir = (entry) => {
      const dirInfo = fs.readdirSync(entry);
      dirInfo.forEach(item => {
        const location = path.join(entry, item);
        const info = fs.statSync(location);
        if (info.isDirectory()) {
          // console.log(`dir:${location}`);
          readDir(location);
        } else {
          var fileTypeReg = /.xls$/;
          if (location.indexOf('.xls') != -1) {
            // console.log(entry)
            // console.log(`file:${location}`);
            let fileJson = printLog(location);
            retStr += fileJson.retObjStr;
            retObj.push(fileJson.retObj)
            // console.log('fileJson\n\n\n\n' + fileJson)

          }
        }
      })
    }
    readDir('excel/202003start/');
    fs.writeFile(`excel/${_time}.txt`, retStr, {}, function (err) {
    });
    fs.writeFile(`excel/${_time}.json`, JSON.stringify(retObj), {}, function (err) {
    });
    return {
      'retstr': retStr,
      'retObj': retObj
    };
  }
  listen() {
    const server = http.createServer((req, res) => {
      const { pathname } = url.parse(req.url, true)
      for (const item of router) {
        const { path, method, handler } = item
        if (pathname === path && req.method.toLocaleLowerCase() === method) {
          return handler(req, res)
        }
      }
    })
    server.listen(...arguments)
  }
}

module.exports = function createApplication() {
  return new Application()
}