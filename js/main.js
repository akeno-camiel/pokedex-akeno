class Personaje {
    constructor(nombre, edad, genero, colorDePelo, colorDeOjos) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.colorDePelo = colorDePelo;
        this.colorDeOjos = colorDeOjos;
        this.saludar = function () {
            console.log("Hola " + nombre + "!");
        }
    }

    confirmar() {
        let datosCorrectos = false;

        while (!datosCorrectos) {
            const respuesta = confirm(
                "¿Estos datos son correctos?\n" +
                "Edad: " + this.edad
            );

            if (!respuesta) {
                this.edad = prompt("Ingrese su edad nuevamente");
            } else {
                let confirmacionEdad = false;

                while (!confirmacionEdad) {
                    confirmacionEdad = confirm("¿La edad es correcta?\n" + "Edad: " + this.edad);
                    if (!confirmacionEdad) {
                        this.edad = prompt("Ingrese su edad nuevamente");
                    }
                }
                datosCorrectos = true;
            }
        }
    }
}

const personaje1 = new Personaje(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su edad"),)
// prompt("Ingrese su genero"),
// prompt("Ingrese su color de pelo"),
// prompt("Ingrese su color de ojos")); 

personaje1.saludar();

personaje1.confirmar();


function Pokemon(nombre, numeroPokedex, altura, peso, descripcion, tipo, debilidad) {
    this.nombrePoke = nombre;
    this.numeroPokedex = numeroPokedex;
    this.altura = altura;
    this.peso = peso;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.debilidad = debilidad;
}
const pokemons = [
    new Pokemon(
        "pikachu",
        25,
        "0,4 m",
        "6,0 kg",
        "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.",
        "eléctrico",
        "tierra",
    ),

    new Pokemon(
        "bulbasaur",
        1,
        "0,7 m",
        "6,9 kg",
        "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        ["hierba", "veneno"],
        ["fuego", "psíquico", "volador", "hielo"]
    ),
    new Pokemon(
        "ivysaur",
        2,
        "1,0 m",
        "13,0 kg",
        "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
        ["hierba", "veneno"],
        ["fuego", "psíquico", "volador", "hielo"]
    ),
    new Pokemon(
        "venasaur",
        3,
        "2,0 m",
        "100,0 kg",
        "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        ["hierba", "veneno"],
        ["fuego", "psíquico", "volador", "hielo"]
    ),

    new Pokemon(
        "charmander",
        4,
        "0,6 m",
        "8,5 kg",
        "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
        "fuego",
        ["agua", "tierra", "roca"]
    ),

    new Pokemon(
        "charmeleon",
        5,
        "1,1 m",
        "19,0 kg",
        "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
        "fuego",
        ["agua", "tierra", "roca"]
    ),

    new Pokemon(
        "charizard",
        6,
        "1,7 m",
        "90,5 kg",
        "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
        ["fuego", "volador"],
        ["agua", "eléctrico", "roca x4"]
    ),

    new Pokemon(
        "squirtle",
        7,
        "0,5 m",
        "9,0 kg",
        "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        "agua",
        ["planta", "eléctrico"]
    ),

    new Pokemon(
        "wartortle",
        8,
        "1,0 m",
        "22,5 kg",
        "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
        "agua",
        ["planta", "eléctrico"]
    ),

    new Pokemon(
        "blastoise",
        9,
        "1,6 m",
        "85,5 kg",
        "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "agua",
        ["planta", "eléctrico"]
    )
]


let tipo = prompt("¿Qué tipo de pokemon buscas?").toLowerCase();
let numero = Number(prompt("N° de Pokemon"));
let nombrePoke = prompt("¿Qué nombre de pokemon buscas?").toLowerCase();

function verPokemon(pokemons) {
    pokemons.forEach(pokemon => console.log("Pokemon n° " + pokemon.numeroPokedex + " - Nombre: " + pokemon.nombrePoke + " - altura: " + pokemon.altura + " - peso: " + pokemon.peso + " - Descripción: " + pokemon.descripcion + " - tipos: " + pokemon.tipo + " - es debil ante: " + pokemon.debilidad))
}

function filtrarPokemon() {
    const resultado = pokemons.filter(pokemon => {
        if (tipo || numero || nombrePoke) {
            return pokemon.tipo === tipo || pokemon.numeroPokedex === numero || pokemon.nombrePoke === nombrePoke;
        } else if (tipo) {
            return pokemon.tipo === tipo;
        } else if (numero) {
            return pokemon.numeroPokedex === numero;
        } else if (nombrePoke){
            return pokemon.nombrePoke === nombrePoke;
        }

        return false;
    });

    if (resultado.length > 0) {
        verPokemon(resultado);
    } else {
        console.log("Error, no hay coincidencias");
    }
}

filtrarPokemon();
