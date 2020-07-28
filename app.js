const express = require("express")
const path = require("path");
const app =express();
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser:true});
const bodyParser= require("body-parser");
var dateParser = require('express-query-date');


const port =80;

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    phone: String,
    email: String
    
  });

  const contact = mongoose.model('contact', contactSchema);



//EXPRESS SPECIFIC STUFF
app.use('/static' , express.static('static'));//for serving static file
app.use(express.urlencoded())
app.use(bodyParser.json());
app.use(dateParser({
    formats: ['MM-DD-YYYY']
}));
//PUG SPECIFIC STUFF

app.set('view engine', 'pug')//set the template engine at pug
app.set('views', path.join(__dirname, 'views'))//set the views directory


//ENDPOINTS

app.get('/', (req, res)=>{
    const params={ }
   
    res.status(200).render('home.pug',params);
})
app.use('/contact', function(req, res, next){
    console.log(Date.now());    
    next();
 });

app.get('/contact', (req, res)=>{
    const params={ }
   
    res.status(200).render('contact.pug',params);
})

 
app.post('/contact', (req, res)=>{
   var myData = new contact(req.body);
   myData.save().then(()=>{
    //    alert("Item has not been saved to Database");
       res.send("This data has been saved to tha database");
   })
   .catch(()=>{
        //   alert("Item has not been saved to Database");
       res.status(400).send("Item was not saved to the Database");
    })
    
})

app.listen(port, ()=>{
    console.log(`The application has staretd on port ${port}`);
})




//from mozilla
// exports.area = function(width) { return width * width; };
// exports.perimeter = function(width) { return 4 * width; };
// We can import this module using require(), and then call the exported method(s) as shown:

// var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
// console.log('The area of a square with a width of 4 is ' + square.area(4));