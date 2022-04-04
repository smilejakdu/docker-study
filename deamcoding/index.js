const express = require('express');

const app = express();

app.get('/',(req, res) => {
	res.send('deam coding in docker');
});

app.listen(8080,()=>{
	console.log('Server is running');
})