package com.alanturing.pokeapp2627.core.di

import com.alanturing.pokeapp2627.features.pokemon.data.remote.PokemonDataSource
import com.alanturing.pokeapp2627.features.pokemon.data.remote.PokemonRemoteDataSource
import com.alanturing.pokeapp2627.features.pokemon.data.repository.PokemonRepository
import com.alanturing.pokeapp2627.features.pokemon.data.repository.PokemonRepositoryImpl
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
// ANTES: import jakarta.inject.Singleton
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
// ANTES: @InstallIn(Singleton::class)   (Singleton es una anotación, no un componente de Hilt)
@InstallIn(SingletonComponent::class)
interface AppModule {

    @Binds
    @Singleton
    fun bindsPokemonRemoteDataSource(ds: PokemonRemoteDataSource): PokemonDataSource

    // NUEVO: sin este @Binds Hilt no sabe qué implementación usar para PokemonRepository.
    @Binds
    @Singleton
    fun bindsPokemonRepository(repo: PokemonRepositoryImpl): PokemonRepository
}
