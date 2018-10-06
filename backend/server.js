import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Mongoose  from 'mongoose';
import Zipcodes from './models/zipdata';
import request from 'request';
var weatherdata;
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());



Mongoose.connect('mongodb://localhost:27017/zipcodes', { useNewUrlParser: false });

const connection = Mongoose.connection;

connection.once('open', () => console.log('Mongo Db connection established'));



router.route('/zipcodes').get((req,res) => {

Zipcodes.find((err,zipcodes) =>{

    if(err)
       
        console.log(err);
    else
        res.json(zipcodes);
});

});

router.route('/zipcodes/:zip').get((req,res) => {

    let zips = req.params.zip;
    let apiKey = 'bc33f5ad884f7ea43fdf16636478b0f7';
let urls = `http://api.openweathermap.org/data/2.5/weather?zip=${zips}&appid=${apiKey}&units=imperial`
   
function doCall(urls, callback) {
    request(urls, function(err,response,body){
  
  weatherdata = JSON.parse(body);
  
  var wea = {
     place : weatherdata.name,
  temperature : weatherdata.main.temp,
  humid : weatherdata.main.humidity,
  desc : weatherdata.weather[0].description,
  ctry : weatherdata.sys.country
  };
  
    
  return callback(wea);
  });
  }
  
  doCall(urls, function(forecast){
      
  res.send(forecast);
  })

   
    });
    
    




router.route('/zipcodes/add').post((req,res) => {
    let zip  = new Zipcodes(req.body);
        zip.save()
            .then(zip =>{
                res.status(200).json({'zip':'Added Succesfully'})

            })
              .catch(err =>{
                    res.status(400).send('failed to create a new record');

              })  ;

});


router.route('/get-weather/add').post((req,res) => {

    let requestBody = req.body;
    let zips = requestBody.zip; 
    res.send(zips);

});



app.use('/',router);
app.listen(4000,() => console.log('Express Running on port 4000'));


