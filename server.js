//Author: Camilo Concha 

var express     = require('express');//Importar express
var mongo       = require('mongoose');//Driver Mongo DB
var app         = express();//Instancia del Framework de express
var bodyParser  = require('body-parser');//Necesario para el API

//Conexión a la base de datos 
mongo.connect('mongodb://localhost/vehiculos',function(err,res){
    if(err){
        console.log('Error');
    }else{console.log('DB Online');} 
});

/*Configuración de express*/
//Se utilizan los métodos de express para poder hacer los "http"
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//

app.get('/',function(req, res){
    res.send('Hola Mundo');
});


//Rutas del API
require('./routes')(app);

app.listen(9500);//Puerto
console.log('Node:9500 Express->Online');