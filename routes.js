module.exports = function(app){//Se llama la aplicación de express
    //Importar DB:
    var Vehiculos = require('./modelo');
    
    //GET
    findAllVehiculos = function(req,res){
        Vehiculos.find(function(err, vehiculos){
            if(!err){
                res.json(vehiculos);
            } else{
                console.log('Error'+' '+err);
            }
        });
    };
    //GET 
    
    findByID = function(req, res){        
        Vehiculos.findById(req.params._id,function (err, vehiculo) {
            if (err)
                res.send(err);
            res.json(vehiculo);

        })
        
    };//
    
    //POST
    addVehiculo = function(req, res){
        console.log('POST');
        console.log(req.body);
        
            var vehiculo = new Vehiculos
            
           vehiculo.marca     = req.body.marca,
           vehiculo.modelo    = req.body.modelo,
           vehiculo.capacidad =req.body.capacidad,
           vehiculo.cilindraje=req.body.ciclindraje,
           vehiculo.tipo      =req.body.tipo  

        //Guardar
        vehiculo.save(function(err){
            if(!err)console.log('guardado');
            else console.log('Error'+' '+err);
        });
        //Enviar 
        res.json({ message: 'Vehiculo Creado' });
    };
    
    //PUT
     updateVehiculo = function(req ,res){
      Vehiculos.findById(req.params.id,function(err,vehiculo){
          
           vehiculo.titulo      =req.body.titulo;
           vehiculo.marca       =req.body.marca;
           vehiculo.modelo      =req.body.modelo;
           vehiculo.capacidad   =req.body.capacidad;
           vehiculo.cilindraje  =req.body.ciclindraje;
           vehiculo.tipo        =req.body.tipo;
          
          
          vehiculo.save(function(err){
             if(!err)console.log('guardado');
            else console.log('Error'+' '+err);            
           })
          
    
      })
    };
//    Delete
    
    deleteVehiculo = function(req, res){
        Vehiculos.findById(req.params.id,function(err,vehiculo){
            vehiculo.remove(function(err){
                 if(!err)console.log('guardado');
                 else console.log('Error'+' '+err); 
            });
            
        });  
    };
    
//Enrutadores 
    app.get('/vehiculos',findAllVehiculos);
    app.get('/vehiculos/:id',findByID);
    app.post('/vehiculos',addVehiculo);
    app.put('/vehiculos/:id',updateVehiculo);
    app.delete('/vehiculos/:id',deleteVehiculo);

}