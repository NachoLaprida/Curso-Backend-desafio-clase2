const fs = require ('fs')

class Contenedor {
    constructor (ruta) {
        this.ruta = ruta
    }

    async save(obj){
        try{
            //leer el archivo
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            //parsear lo que este en el archivo a un objeto
            let dataArchivoParse = JSON.parse(dataArchivo)
            // en la codicion del if si dataArchivoParse es 0 es false, entonces se va a else
            if(dataArchivoParse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([ ...dataArchivoParse, {...obj, id: dataArchivoParse[dataArchivoParse.length - 1].id + 1}/* aca esta buscando al ultimo del array para agregarle, buscamos el length -1 para ir a la ultima posicion del array y despues le sumas uno al id para que siga al ultimo del id */], null, 2))
                
                //el spread operator reemplaza el array.push p, en el segundo params estas creandole un id
                
            } 
            //si es falso lo crea la primera vez
            else {
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: 1}/* esto es para que si no existe nada en el array empiece desde el 1 el id y no del 0 por el tema de la posicion del array */], null, 2))
                

            }
            console.log(`El archivo tiene el id: ${dataArchivoParse[dataArchivoParse.length -1].id + 1}`)
        } catch (err) {
            console.log(err)
        }
        
        /* console.log(dataArchivo) */
    }

    //traer productos por id
    async getById(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)

            let producto = dataArchivoParse.find(p => p.id === id)
            if(producto) {
                console.log(producto)
            } else {
                console.log('No se encontro el producto')
            }
        }
        catch (err){
            console.log(err)
        }
    }
    async getAll() {
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if(dataArchivoParse.length){
                console.log(dataArchivoParse)
            } 
            else{
                console.log("No hay productos")
            }
        }
        catch (err){
            console.log(err)
        }
    }

    async delete(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)

            let producto = dataArchivoParse.find(p => p.id === id)
            if(producto){
                let dataArchivoParseFiltrado = dataArchivoParse.filter(p => p.id !== id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParseFiltrado, null, 2))
                console.log('Producto Eliminado')
            }
            else {
                console.log('No se encontro el producto')
            }

        }
        catch(err){
            console.log(err)
        }
    }
    async deleteAll(){
        await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
            console.log('Productos Eliminados')
    }


}

module.exports = Contenedor
