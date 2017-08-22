import config, {nodeEnv} from './config'
import apiRouter from './api'

import express from 'express'
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'pug');

server.get('/',(req,res)=>{
	res.render('index');
});

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
});

server.use('/api',apiRouter);
server.use(express.static("views")) // Set current patch inside the folder

server.listen(config.port,()=>{
	console.log('express listen on port',config.port)
})