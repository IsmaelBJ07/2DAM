package com.alanturing.pokeapp2627.features.pokemon.data.model

data class Pokemon(
    val id: Int,
    val name:String,
    // ANTES: val pokemonImageUrl: String,
    // Ahora admite null porque PokeAPI devuelve sprites.front_default = null en algunos Pokémon.
    val pokemonImageUrl: String?,
)
