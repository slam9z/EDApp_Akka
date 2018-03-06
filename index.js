
const express = require('express');
const app = require('connect')();
const process = require('process');

console.log(__dirname);
app.use(express.static(__dirname + '/etherdelta/')); 

app.listen(8080, function () {
  console.log('EtherDelta is listening on port 8080')
});

process.on('SIGINT', function() {
    process.exit();
});
