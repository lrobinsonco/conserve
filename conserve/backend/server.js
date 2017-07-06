import express from 'express';
import mongodb from 'mongodb'

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db){

  app.get('/api/orgs', (req,res) => {
    db.collection('orgs').find({}).toArray((err, orgs) => {
      res.json({ orgs });
    });
  });

  app.listen(8080, () => console.log('Server on localhost:8080'))

})
