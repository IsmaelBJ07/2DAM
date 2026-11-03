package com.alanturing.pokeapp2627.features.pokemon.di

import com.alanturing.pokeapp2627.features.pokemon.data.remote.PokeApi
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
class NetworkModule {

    // ANTES: fun provideHttpClient(): PokeApi  (el nombre engañaba: no devuelve un cliente HTTP)
    @Provides
    @Singleton
    fun providePokeApi(): PokeApi {
        val retrofit:Retrofit = Retrofit.Builder()
            // ANTES: .baseUrl("https://pokeapi.co/api/v2")   (sin "/" final Retrofit lanza excepción)
            .baseUrl("https://pokeapi.co/api/v2/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        return retrofit.create(PokeApi::class.java)
    }
}
