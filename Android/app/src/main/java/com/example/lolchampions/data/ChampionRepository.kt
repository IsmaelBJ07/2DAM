package com.example.lolchampions.data;

class ChampionRepository {
    private val _champions = listOf(
            Champion(id = 1, name = "Annie"),
            Champion(id = 2, name = "Fizz")
    )
    fun readALL():List<Champion> = _champions
}

data class Champion(
        val id: Int,
        val name: String,
)
