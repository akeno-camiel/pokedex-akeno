const nombreLink = document.getElementById("nombreLink");
document.addEventListener("DOMContentLoaded", function () {

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
        localStorage.setItem("nombre", nombre);

        nombreLink.textContent = nombre;
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
        nombreLink.textContent = "Nombre";
    }

    cargarDatos();

    const guardarDatosBtn = document.getElementById("guardarDatosBtn");
    if (guardarDatosBtn) {
        guardarDatosBtn.addEventListener("click", guardarDatos);
    }
    const resetDatosBtn = document.getElementById("resetDatosBtn");
    if (resetDatosBtn) {
        document.getElementById("resetDatosBtn").addEventListener("click", resetearDatos);
    }


    const equipoPokemon = JSON.parse(localStorage.getItem("equipoPokemon")) || [];

    equipoPokemon.forEach(pokemon => {
        let pokemonID = pokemon.id.toString();
        if (pokemonID.length === 1) {
            pokemonID = "00" + pokemonID;
        } else if (pokemonID.length === 2) {
            pokemonID = "0" + pokemonID;
        }
        const moves = pokemon.moves;
        const shuffledMoves = moves.sort(() => 0.5 - Math.random());
        const randomMoves = shuffledMoves.slice(0, 4);
        const movesList = randomMoves.map(move => `<li>${move.move.name}</li>`).join('');
        const tipo = pokemon.types.map(types => `${types.type.name}`)
        const div = document.createElement("div");
        div.classList.add("poke-card");
        div.innerHTML = `
            <div class="poke-equipo-card">
                <div class="poke-equipo-data-nombre">
                    <p class="n-frente">#${pokemonID}</p>
                    <h2 class="nombre">${pokemon.name.toUpperCase()}</h2>
                </div>
                <div class="poke-equipo-img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
                        alt="${pokemon.name}">
                </div>
                <div class="poke-equipo-data-types">
                    <h2>Tipos</h2>
                    ${tipo.map(t => `<p class="pokemon-${t}">${t}</p>`).join('')}
                </div>
                <div class="poke-equipo-data-debilidad">
                    <h2>Debilidad</h2>
                    <div class="poke-equipo-data-types-div">
                    </div>
                </div>
                <div class="poke-equipo-moves">
                    <h2>Movimientos</h2>
                    <ul>
                    ${movesList}
                    </ul>
                </div>
            </div>
        `;

        const equipoContainer = document.querySelector(".poke-equipo");
        equipoContainer.appendChild(div);

    });
});