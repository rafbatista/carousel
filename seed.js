const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const carousel = db.collection('carousel')
  carousel
    .deleteMany()
    .then(() => {
      carousel.insertMany([
        {
          id: 1,
          imgSrc: 'public/images/audi-a5-2018.jpg',
          altImgName: '2018 Audi A5'
        },
        {
          id: 2,
          imgSrc: 'public/images/bmw-430i-2018.jpg',
          altImgName: '2018 BMW 430i'
        },
        {
          id: 3,
          imgSrc: 'public/images/cadillac-ats-coupe-2018.png',
          altImgName: '2018 Cadillac ATS Coupe'
        }
      ])
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
    .then(() => console.log('Images are seeded!'))
    .then(() => db.close())
})
