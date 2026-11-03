package com.alanturing.pokeapp2627.features.pokemon.data.remote

import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query
import retrofit2.Response

interface PokeApi {

    // ANTES: @GET("/pokemon")
    // Una ruta que empieza por "/" ignora el "/api/v2" de la baseUrl y pedía https://pokeapi.co/pokemon (404).
    // NUEVO: parámetros limit/offset (por defecto la API solo devuelve 20).
    @GET("pokemon")
    suspend fun readAllPokemon(
        @Query("limit") limit: Int = 20,
        @Query("offset") offset: Int = 0
    ): Response<PokemonListResult>

    // ANTES: @GET("/pokemon/{name}")
    @GET("pokemon/{name}")
    suspend fun readPokemonByName(@Path("name") name:String): Response<PokemonResult>

    // ANTES: @GET("/pokemon/{id}")
    @GET("pokemon/{id}")
    suspend fun readPokemonById(@Path("id") id:Int): Response<PokemonResult>
}
