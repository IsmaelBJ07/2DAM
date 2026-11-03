package com.alanturing.pokeapp2627.features.pokemon.data.remote

import com.alanturing.pokeapp2627.features.pokemon.data.model.Pokemon
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import javax.inject.Inject

class PokemonRemoteDataSource
    @Inject constructor(
        private val _api:PokeApi
    ): PokemonDataSource {

    override suspend fun readAllPokemon(): List<Pokemon> {
        // ANTES:
        // val response = _api.readAllPokemon()
        // val pokemons = mutableListOf<Pokemon>()
        // if (response.isSuccessful) {
        //     // TODO PARSEAR EL CUERPO A EL MODEL Pokemon
        //     val body = response.body()!!
        //     for(item in body.results) {
        //         val pokemon = readPokemonByName(item.name)
        //         pokemons.add(pokemon!!)
        //     }
        // }
        // else {
        //     // Mostrar un errror!
        // }
        // return pokemons

        val response = _api.readAllPokemon()
        if (!response.isSuccessful) {
            throw PokemonApiException("Error ${response.code()} al leer la lista de Pokémon")
        }
        val body = response.body() ?: throw PokemonApiException("Respuesta vacía de la API")

        // Peticiones en paralelo en lugar de una detrás de otra; los que no existan se descartan.
        return coroutineScope {
            body.results
                .map { item -> async { readPokemonByName(item.name) } }
                .awaitAll()
                .filterNotNull()
        }
    }

    override suspend fun readPokemonByName(name: String): Pokemon? {
        // ANTES:
        // val response = _api.readPokemonByName(name)
        // if (response.isSuccessful) {
        //     val body = response.body()!!
        //     return body.toModel()
        // }
        // else{
        //     return null
        // }
        val response = _api.readPokemonByName(name)
        return when {
            response.isSuccessful -> response.body()?.toModel()
            response.code() == 404 -> null
            else -> throw PokemonApiException("Error ${response.code()} al leer $name")
        }
    }

    override suspend fun readPokemonById(id: Int): Pokemon? {
        // ANTES: TODO("Not yet implemented")
        val response = _api.readPokemonById(id)
        return when {
            response.isSuccessful -> response.body()?.toModel()
            response.code() == 404 -> null
            else -> throw PokemonApiException("Error ${response.code()} al leer el Pokémon $id")
        }
    }

}
