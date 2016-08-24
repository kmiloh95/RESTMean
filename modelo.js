var mongoose = require('mongoose'),//Driver de conexión con Mongo
Schema = mongoose.Schema;//Definicion de un Esquema 
//Definición de la tabla "Vehículos"
var vehiculos = new Schema({
   marca:String,
   modelo:Number,
   capacidad:Number,
   cilindraje:Number,
   tipo:{
       type:String,
       enum:['Automovil','Camioneta','Camion','Bus']
   }
});

module.exports = mongoose.model('Vehiculos',vehiculos);