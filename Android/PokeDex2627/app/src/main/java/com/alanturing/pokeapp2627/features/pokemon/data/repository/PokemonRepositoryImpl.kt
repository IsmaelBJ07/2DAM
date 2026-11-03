package com.alanturing.pokeapp2627.features.pokemon.data.repository

import com.alanturing.pokeapp2627.features.pokemon.data.model.Pokemon
import com.alanturing.pokeapp2627.features.pokemon.data.remote.PokemonDataSource
import javax.inject.Inject

class PokemonRepositoryImpl @Inject constructor(
    // ANTES: private val _remoteDataSource: PokemonDataSource
    private val remoteDataSource: PokemonDataSource
): PokemonRepository {
    override suspend fun readAllPokemon(): List<Pokemon> {
        // ANTES: TODO("Not yet implemented")
        return remoteDataSource.readAllPokemon()
    }

    // ANTES: override suspend fun readPokemonById(): Pokemon { TODO("Not yet implemented") }
    override suspend fun readPokemonById(id: Int): Pokemon? {
        return remoteDataSource.readPokemonById(id)
    }
}
