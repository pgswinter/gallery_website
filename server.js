import config, {nodeEnv} from './config'
import apiRouter from './api'

import express from 'express'
const server = express();

server.set('view engine', 'pug');

server.get('/',(req,res)=>{
	res.render('index');
});

server.use('/api',apiRouter);
server.use(express.static("views"))

server.listen(config.port,()=>{
	console.log('express listen on port',config.port)
})