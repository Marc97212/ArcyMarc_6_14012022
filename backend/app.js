const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');



 mongoose.connect('mongodb+srv://Iblis972:Iblis972@cluster0.v69eh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));  
  
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());



  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

  


module.exports = app;






//   imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',