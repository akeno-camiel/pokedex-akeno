
const pokemonData = [];
const url = "https://pokeapi.co/api/v2/pokemon/";
const equipoPokemon = [];



function cargarDatosPokemon() {
    for (let i = 1; i <= 151; i++) {
        fetch(url + i)
            .then((response) => response.json())
            .then(data => {
                pokemonData.push(data);
                mostrarPokemon(data);
            });
    }
}

cargarDatosPokemon();

const tarjetaPokemon = document.querySelector(".poke-pokemon");

function mostrarPokemon(pokemon) {
    const div = document.createElement("div");
    div.classList.add("poke-card");
    const tipo = pokemon.types.map(types => `${types.type.name}`)
    const typesClases = tipo.join('-');

    let pokemonID = pokemon.id.toString();
    if (pokemonID.length === 1) {
        pokemonID = "00" + pokemonID;
    } else if (pokemonID.length === 2) {
        pokemonID = "0" + pokemonID;
    }

    div.innerHTML = `
    <div class="poke-pokemon-card fondo-${tipo[0]}">
        <div class="poke-pokemon-data">
            <div class="poke-pokemon-data-nombre-${typesClases}">
                <h2 class="nombre">${pokemon.name.toUpperCase()}</h2>
                <p class="n-frente">#${pokemonID}</p>
            </div>
            <div class="poke-pokemon-data-ball">
                <a class="agregar-equipo" href=""><img src="../img/pokeball-cerrada.png" alt="pokeball-cerrada"></a>
                <a class="agregar-equipo" href=""><img class="pokeball-semi" src="../img/pokeball-semi.png" alt="pokeball-semi"></a>
            </div>
        </div>
        <div class="poke-pokemon-data-back">
            <div class="poke-pokemon-data-types">
                <p class="tipo">Tipo: </p>
                <div class="poke-pokemon-data-types-div">
                ${tipo.map(t => `<p class="pokemon-${t}">${t}</p>`).join('')}
                </div>
            </div>
            <div class="poke-pokemon-data-types">
                <p class="tipo">Debilidad: </p>
                <div class="poke-pokemon-data-types-div">
                    ${Array.isArray(pokemon.debilidad) ? pokemon.debilidad.map(debilidad => `<p class="pokemon-${debilidad}">${debilidad}</p>`).join('') : `<p class="pokemon-${pokemon.debilidad}">${pokemon.debilidad}</p>`}
                </div>
            </div>
            <div class="poke-pokemon-data-info">
                <p class="pokemon-info">${pokemon.height / 10} M</p>
                <p class="pokemon-info">${pokemon.weight / 10} KG</p>
            </div>
        </div>
        <div class="poke-pokemon-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
        </div>
    </div>
    `;
    tarjetaPokemon.append(div);
    
    const addEquipo = div.querySelectorAll(".agregar-equipo");
    addEquipo.forEach(button => {
        button.addEventListener("click", clickHandler);
        button.pokemonData = pokemon;
    });
}

function clickHandler(evt) {
    evt.preventDefault();
    const button = evt.currentTarget;
    const pokemon = button.pokemonData;

    if (equipoPokemon.length < 6) {
        equipoPokemon.push(pokemon);
        localStorage.setItem("equipoPokemon", JSON.stringify(equipoPokemon));
        alert("Tu Pokémon se ha añadido al equipo.");
        console.log(equipoPokemon);
        button.removeEventListener("click", clickHandler);
    } else {
        alert("Tu equipo ya tiene 6 Pokémon. No puedes agregar más.");
    }
}