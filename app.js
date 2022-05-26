const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  fs.readFile('./src/index.html', null, function(error, data) {
    if(error) {
      res.writeHead(404)
      res.write('File not found');
    } else {
      res.write(data)
    }
    res.end();
  })
})

app.get('/servicos', function (req, res) {
  fs.readFile('./src/pages/servicos.html', null, function(error, data) {
    if(error) {
      res.writeHead(404)
      res.write('File not found');
    } else {
      res.write(data)
    }
    res.end();
  })
})

app.get('/orcamentos', function (req, res) {
  fs.readFile('./src/pages/orcamentos.html', null, function(error, data) {
    if(error) {
      res.writeHead(404)
      res.write('File not found');
    } else {
      res.write(data)
    }
    res.end();
  })
})

app.get('/contato', function (req, res) {
  fs.readFile('./src/pages/contato.html', null, function(error, data) {
    if(error) {
      res.writeHead(404)
      res.write('File not found');
    } else {
      res.write(data)
    }
    res.end();
  })
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})