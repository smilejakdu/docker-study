const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
	host: 'redis-server',
	port:6379,
})

client.set("number",0);

app.get('/', (req,res) => {
	client.get("number",(error, number)=>{
		// 현재 숫자를 가져온 후에 1씩 울려줍니다.
		res.send("숫자가 1씩 올라갑니다. 숫자:"+number)
		client.set("number",parseInt(number) + 1)
	})
})

app.listen(8080);
console.log('Server is running');