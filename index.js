// const express = require('express')
const express = require('./kpress')
const excelBatchProcess = require('./excelBatchProcess')()
const app = express()
app.get('/', (req, res) => {
  res.end('HELLO WORD')
})

app.get('/users', (req, res) => {
  res.end(JSON.stringify({ name: 'abc' }))

})

// excelBatchProcess.getData()

app.get('/excel', (req, res) => {
  try {

    let ret = excelBatchProcess.getData()
    // console.log('ret::\n' + ret)
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    let _content = '<style>table,td{border:1px solid #000; }</style>' + ret.retstr
    res.end(_content)
  } catch (error) {
    console.log(error)
    res.end(error)

  }

})

app.listen(3000, () => {
  console.log(' app listen at 3000')
})