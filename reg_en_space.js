let filename = '中国a  s人的.jpg'
let s = filename.replace(/[\u4e00-\u9fa5]|\s/g, '')
console.log(s)