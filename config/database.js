const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONECTION,
    {
        useUnifiedTopology: true, //Habilita a mongoose a controlar la db de mongo
        useNewUrlParser: true, // utiliza el analizador de errores en ludar del mongoose

    })
//Primer parametro: Link de conexión
//Segundo parametro:Objeto con dos propiedades true

.then(()=>console.log('connected to database successfully ♥ 😊'))
.catch(error => console.log(error))