const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;
const urlMongoAtlas = "mongodb+srv://admin:admin@prueba.isywf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(urlMongoAtlas, (err, res)=>{
    try{
        if(err){
            throw err;
        }
        else{
            console.log("La conexión a la BD es correctamente");

            app.listen(port, ()=>{
                console.log("Servidor del API REST está funcionando en http://localhost:3000");
            })
        }
    } catch(err){
        console.error(err);
    }
});
