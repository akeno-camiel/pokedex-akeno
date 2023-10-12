const btnTipos = document.querySelectorAll(".btn-tipo");

btnTipos.forEach(btnTipo => {
    btnTipo.addEventListener("click", () => {
        const tipoPoke = btnTipo.classList[1];

        const resultados = pokemons.filter(pokemon => {
            if (Array.isArray(pokemon.tipo)) {
                return pokemon.tipo.includes(tipoPoke);
            } else {
                return pokemon.tipo === tipoPoke;
            }
        });

        tarjetaPokemon.innerHTML = "";
        resultados.forEach(pokemon => mostrarPokemon(pokemon));
    });
});


