import express from 'express';
import mongodb from 'mongodb'

const app = express();

app.listen(8080, () => console.log('Server on localhost:8080'))
