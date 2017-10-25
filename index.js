const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect('mongodb://localhost/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const carousel = db.collection('carousel')

  app.get('/slides', (req, res) => {
    carousel
      .find({})
      .toArray()
      .then(images => {
        res.json(images)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
  app.listen(3000, () => console.log('Test at http://localhost:4000'))
})
