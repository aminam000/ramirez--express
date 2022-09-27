const express = require('express');

const app = express();

app.use(express.static('./server/public'));

app.listen(3000, function(){
    console.log('We\'re live!')
});


console.log('in server.js!');
