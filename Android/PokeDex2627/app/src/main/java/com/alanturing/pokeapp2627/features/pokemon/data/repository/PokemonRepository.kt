package com.alanturing.pokeapp2627.features.pokemon.data.repository

import com.alanturing.pokeapp2627.features.pokemon.data.model.Pokemon

interface PokemonRepository {

    suspend fun readAllPokemon():List<Pokemon>
    // ANTES: suspend fun readPokemonById(): Pokemon   (no recibía el id)
    suspend fun readPokemonById(id: Int): Pokemon?
}
