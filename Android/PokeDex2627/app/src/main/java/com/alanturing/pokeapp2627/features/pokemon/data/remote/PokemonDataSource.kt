package com.alanturing.pokeapp2627.features.pokemon.data.remote

import com.alanturing.pokeapp2627.features.pokemon.data.model.Pokemon

// NUEVO: error propio para respuestas HTTP que no son correctas (500, 429...).
class PokemonApiException(message: String): Exception(message)

interface PokemonDataSource {
    suspend fun readAllPokemon():List<Pokemon>
    suspend fun readPokemonByName(name:String): Pokemon?
    // ANTES: suspend fun readPokemonById(id:Int): Pokemon
    // Ahora devuelve Pokemon? igual que readPokemonByName (null = no existe).
    suspend fun readPokemonById(id:Int): Pokemon?
}
