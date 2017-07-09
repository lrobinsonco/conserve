import express from 'express';
import mongodb from 'mongodb';
import cors from 'cors';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

app.use(cors())

mongodb.MongoClient.connect(dbUrl, function(err, db){

  app.get('/api/orgs', (req,res) => {
    db.collection('orgs').find({}).toArray((err, orgs) => {
      res.json({ orgs });
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later."
      }
    })
  })

  app.listen(8080, () => console.log('Server on localhost:8080'))

})
