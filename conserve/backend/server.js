import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json())
const dbUrl = 'mongodb://localhost/crudwithredux';

function validate(data) {

  let errors = {};
  if (data.org === '') errors.title = "Cannot be empty";
  if (data.logo === '') errors.logo = "Cannot be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

app.use(cors())

mongodb.MongoClient.connect(dbUrl, function(err, db){

  app.get('/api/orgs', (req,res) => {
    db.collection('orgs').find({}).toArray((err, orgs) => {
      res.json({ orgs });
    });
  });

  app.post('/api/orgs', (req,res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {
      const { org, logo } = req.body;
      db.collection('orgs').insert({ org, logo }, (err, result) => {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong"}})
        } else {
          res.json({ game: result.ops[0] })
        }
      })
    } else {
      res.status(400).json({ errors });
    }
  })

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later."
      }
    })
  })

  app.listen(8080, () => console.log('Server on localhost:8080'))

})
