
document.addEventListener("DOMContentLoaded", function() {
function guardarDatos() {
    const nombre = document.getElementById("nombreInput").value;
    const edad = document.getElementById("edadInput").value;
    const ojos = document.getElementById("ojosInput").value;
    const pelo = document.getElementById("peloInput").value;

    const entrenador = {
        nombre,
        edad,
        ojos,
        pelo
    };

    localStorage.setItem("entrenador", JSON.stringify(entrenador));
}

function cargarDatos() {
    const entrenadorJSON = localStorage.getItem("entrenador");

    if (entrenadorJSON) {
        const entrenador = JSON.parse(entrenadorJSON);
        document.getElementById("nombreInput").value = entrenador.nombre;
        document.getElementById("edadInput").value = entrenador.edad;
        document.getElementById("ojosInput").value = entrenador.ojos;
        document.getElementById("peloInput").value = entrenador.pelo;
    }
}

function resetearDatos() {
    document.getElementById("nombreInput").value = "";
    document.getElementById("edadInput").value = "";
    document.getElementById("ojosInput").value = "";
    document.getElementById("peloInput").value = "";
    localStorage.removeItem("entrenador");
}

cargarDatos();

document.getElementById("guardarDatosBtn").addEventListener("click", guardarDatos);
document.getElementById("resetDatosBtn").addEventListener("click", resetearDatos);

});

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
        "bulbasaur",
        1,
        "0,7 m",
        "6,9 kg",
        "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        ["hierba", "veneno"],
        ["fuego", "psiquico", "volador", "hielo"]
    ),
    new Pokemon(
        "ivysaur",
        2,
        "1,0 m",
        "13,0 kg",
        "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
        ["hierba", "veneno"],
        ["fuego", "psiquico", "volador", "hielo"]
    ),
    new Pokemon(
        "venasaur",
        3,
        "2,0 m",
        "100,0 kg",
        "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        ["hierba", "veneno"],
        ["fuego", "psiquico", "volador", "hielo"]
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
        ["agua", "electrico", "roca x4"]
    ),

    new Pokemon(
        "squirtle",
        7,
        "0,5 m",
        "9,0 kg",
        "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        "agua",
        ["hierba", "electrico"]
    ),

    new Pokemon(
        "wartortle",
        8,
        "1,0 m",
        "22,5 kg",
        "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
        "agua",
        ["hierba", "electrico"]
    ),

    new Pokemon(
        "blastoise",
        9,
        "1,6 m",
        "85,5 kg",
        "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "agua",
        ["hierba", "electrico"]
    )
]

const tarjetaPokemon = document.querySelector(".poke-pokemon");

function mostrarPokemon(pokemon) {
    const div = document.createElement("div");
    div.classList.add("poke-card");
    const tipoDiv = Array.isArray(pokemon.tipo) ? pokemon.tipo : [pokemon.tipo];
    const tipoClases = tipoDiv.map(tipo => `${tipo.toLowerCase()}`).join('-');

    div.innerHTML = `
    <div class="poke-pokemon-card fondo-${tipoDiv[0]}">
        <div class="poke-pokemon-data">
            <div class="poke-pokemon-data-nombre-${tipoClases}">
                <h2 class="nombre">${pokemon.nombrePoke}</h2>
                <p class="n-frente">#${pokemon.numeroPokedex}</p>
            </div>
            <div class="poke-pokemon-data-ball">
                <a href=""><img src="./img/pokeball-cerrada.png" alt="pokeball-cerrada"></a>
                <a href=""><img class="pokeball-semi" src="./img/pokeball-semi.png" alt="pokeball-semi"></a>
            </div>
        </div>
        <div class="poke-pokemon-data-back">
            <div class="poke-pokemon-data-types">
                <p class="tipo">Tipo: </p>
                <div class="poke-pokemon-data-types-div">
                    ${Array.isArray(pokemon.tipo) ? pokemon.tipo.map(tipo => `<p class="pokemon-${tipo}">${tipo}</p>`).join('') : `<p class="pokemon-${pokemon.tipo}">${pokemon.tipo}</p>`}
                </div>
            </div>
            <div class="poke-pokemon-data-types">
                <p class="tipo">Debilidad: </p>
                <div class="poke-pokemon-data-types-div">
                    ${Array.isArray(pokemon.debilidad) ? pokemon.debilidad.map(debilidad => `<p class="pokemon-${debilidad}">${debilidad}</p>`).join('') : `<p class="pokemon-${pokemon.debilidad}">${pokemon.debilidad}</p>`}
                </div>
            </div>
            <div class="poke-pokemon-data-info">
                <p class="pokemon-info">${pokemon.altura}</p>
                <p class="pokemon-info">${pokemon.peso}</p>
            </div>
        </div>
        <div class="poke-pokemon-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.numeroPokedex}.png" alt="${pokemon.nombrePoke}">
        </div>
    </div>
    `;
    tarjetaPokemon.append(div)
}

pokemons.forEach(pokemon => mostrarPokemon(pokemon));




//----------------------buscadores------------------//
const buscadorIndex = document.querySelector(".buscador-pokemon-index");
const formIndex = document.querySelector(".buscador-pokemon");

buscadorIndex.addEventListener('keydown', (evt) => {
    if (evt.key === "Enter") {
        evt.preventDefault();
        const busquedaIndex = buscadorIndex.value.toLowerCase();
        const resultado = pokemons.filter(pokemon => {
            const nomrbrePokemon = pokemon.nombrePoke.toLowerCase();
            const numeroPokemon = pokemon.numeroPokedex.toString();
            return nomrbrePokemon.includes(busquedaIndex) || numeroPokemon.includes(busquedaIndex);
        });
        tarjetaPokemon.innerHTML = "";
        if (resultado.length > 0) {
            resultado.forEach(pokemon => mostrarPokemon(pokemon));
        } else {
            const h2 = document.createElement("h2");
            h2.classList.add("poke-card");
            h2.innerHTML = `<h2>Error, no hay coincidencias con su búsqueda.</h2>`
            tarjetaPokemon.append(h2);
        }
    }
});
formIndex.addEventListener('submit', (evt) => {
    evt.preventDefault();
});



