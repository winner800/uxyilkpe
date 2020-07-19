const fs = require('fs'),
  // http = require("http"),
  // url = require("url"),
  path = require('path'),
  xlsx = require('xlsx');

const args = process.argv.join(' ')

// console.log('args:\n' + args)

let _str = '';
let _time = writeCurrentDate();


const readDir = (entry) => {
  const dirInfo = fs.readdirSync(entry);
  dirInfo.forEach(item => {
    const location = path.join(entry, item);
    const info = fs.statSync(location);
    if (info.isDirectory()) {
      // console.log(`dir:${location}`);
      readDir(location);
    } else {
      if (location.indexOf('/.') == -1 && location.indexOf('.json') == -1) {
        // console.log(entry)
        // console.log(`file:${location}`);
        printLog(location);
        // console.log('_str\n\n\n\n' + _str)
        fs.writeFile(`excel/20190130${_time}.txt`, _str, {}, function (err) {
        });
      }
    }
  })
}
readDir('excel');


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

// printLog('file:/Users/zhangzhonghui/work/NODE-01/excel/customer_analysis/20200705/统计数据.20200628-20200704.xls')
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
  let retObj = {};
  let _dataI = data[0];
  for (let i in _dataI) {
    // console.log('*******************')
    // console.log('i:' + i)
    // console.log('^^^^^^^^^^^^^^^^^^^')
    retObj[i] = {
      'length': 0,
      'list': []
    };
    // console.log(i, _dataI[i])
  }
  // console.log(retObj)
  try {
    console.log(data)
    data.forEach(element => {
      // console.log(element)

      for (let i in element) {
        if (element[i] != '' && element[i] != '0') {
          retObj[i].list.push(element[i]);
          retObj[i].length++;
        }
        // console.log(i, _dataI[i])
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
  for (let i in retObj) {
    // console.log(i + ':' + retObj[i].length)
    _str += i + ':' + retObj[i].length + '\n';
  }

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
  time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;

  return time;
}
