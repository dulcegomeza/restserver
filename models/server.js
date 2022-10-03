const express = require('express');
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
      
    }

    routes(){
      this.app.use('/api/dishes', require('../routes/dish.routes'))

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor esta corriendo en el puerto ${this.port}`);
        });
    }


}


module.exports = Server;