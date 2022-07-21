const Contenedor = require("./contenedor");

const contenedor = new Contenedor('./prueba.txt')

/* contenedor.save({ 
    name:'Remera 3', 
    price: 100, 
    category: "Ropa", 
    description:'Remera blanca'
}) */

//contenedor.getById(1)
//contenedor.getAll()

//contenedor.delete(4)

contenedor.deleteAll()