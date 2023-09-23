// function personaje (nombre, edad, genero, colorDePelo, colorDeOjos){
//     alert ("Hola " + nombre + "!")
// }
// personaje (prompt("ingrese su nombre"))

// const personaje = {
//     nombre: nombre,
//     edad: edad,
//     genero: genero,
//     colorDePelo: 21,
//     colorDeOjos: 21
// }


function Pokemon(nombre, numeroPokedex, altura, peso, descripcion, tipo, debilidad) {
    this.nombre = nombre;
    this.numeroPokedex = numeroPokedex;
    this.altura = altura;
    this.peso = peso;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.debilidad = debilidad;
}

const bulbasaur = new Pokemon(
    "Bulbasaur",
    1,
    "0,7 m",
    "6,9 kg",
    "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    ["hierba", "veneno"],
    ["fuego","psíquico","volador","hielo"]
)

const ivysaur = new Pokemon(
    "Ivysaur",
    2,
    "1,0 m",
    "13,0 kg",
    "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
    ["hierba", "veneno"],
    ["fuego","psíquico","volador","hielo"]
)

const venasaur = new Pokemon (
    "Venasaur",
    3,
    "2,0 m",
    "100,0 kg",
    "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
    ["hierba", "veneno"],
    ["fuego","psíquico","volador","hielo"]
)

const charmander = new Pokemon(
    "Charmander",
    4,
    "0,6 m",
    "8,5 kg",
    "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
    "Fuego",
    ["agua","tierra","roca"]
)

const carmeleon = new Pokemon(
    "Charmeleon",
    5,
    "1,1 m",
    "19,0 kg",
    "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
    "Fuego",
    ["agua","tierra","roca"]
)

const charizard = new Pokemon(
    "Charizard",
    6,
    "1,7 m",
    "90,5 kg",
    "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
    ["Fuego","Volador"],
    ["agua","eléctrico","roca x4"]
)

const squirtle = new Pokemon (
    "Squirtle",
    7,
    "0,5 m",
    "9,0 kg",
    "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
    "agua",
    ["planta","eléctrico"]
)

const wartorle = new Pokemon (
    "Wartortle",
    8,
    "1,0 m",
    "22,5 kg",
    "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
    "agua",
    ["planta","eléctrico"]
)

const blastoise = new Pokemon(
    "Blastoise",
    9,
    "1,6 m",
    "85,5 kg",
    "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
    "agua",
    ["planta", "eléctrico"]
);

const pikachu = new Pokemon(
    "Pikachu",
    25,
    "0,4 m", 
    "6,0 kg", 
    "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.", 
    "Eléctrico", 
    "Tierra");







console.log (bulbasaur.debilidad[2])