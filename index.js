class Usuario {
    constructor (name, lastName, books, pets) {
        this.name = name
        this.lastName = lastName
        this.books = books,
        this.pets = pets
    }
    getFullName(){
        return `Hola soy ${this.name} ${this.lastName}`
    }
    addPets(pets){
        this.pets.push(pets)
    }
    countPets(){
        return this.pets.length
    }
    addBook(name, autor){
        this.books.push({
            name,
            autor
        })
    }
    getBookNames(){
        return this.books.map(books => books.name)
    }

}
const user1 = new Usuario ("Nacho", "Laprida", [{name: "La Odisea",autor: "Homero"}], ["Rupert"])

console.log(user1.getFullName())

user1.addPets("Akira")
user1.addPets("Camus")

console.log(user1.countPets())

user1.addBook(
    "Harry Potter", 
    "JK Rowling"
)
user1.addBook(
    "Lord of the Ring", 
    "JRR Tolkien"
)

console.log("Los nombres de los libros que tengo son",user1.getBookNames())
console.log(user1)





