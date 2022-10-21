
let usuario= prompt("ingresa tu nombre");
    console.log("Bienvenido a HappyPet, ingresa tu busqueda de animales" + usuario);

let animales = [
        {id: 1, nombre:"Jacobo", raza: "Chiguagua"},
        {id: 2, nombre:"Oregano", raza: "Gato Siberiano"},
        {id: 3, nombre:"Candela", raza: "BullDog"},
        {id: 4, nombre:"Violeta", raza: "Gato Persa"},
        {id: 5, nombre:"Jake", raza: "Alaska"},
    
    ]

const buscar = animales.find(animales=> animales.id === 3)
    console.log(buscar)

const ingreso = animales.some(animales => animales.nombre === "Jacobo")
    console.log(ingreso ) 
    
const razas = animales.map(animales => animales.raza)
    console.log(razas);
    
    