import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
	assert.equal(null, err);
	mdb = db;
})

const router = express.Router();

router.get('/',(req,res)=>{
	let contests = {};
	mdb.collection('data').find().each((err, contest)=>{
		assert.equal(null,err);

		if(!contest){
			res.send(contests);
			return;
		}

		contests[contests.id] = contest;
	})
})

// router.get('/',(req,res)=>{
// 	res.send({data:[]});
// })

export default router;