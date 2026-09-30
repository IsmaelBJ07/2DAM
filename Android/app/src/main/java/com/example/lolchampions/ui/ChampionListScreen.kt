package com.example.lolchampions.ui

import androidx.compose.foundation.Image
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.lolchampions.data.ChampionRepository
import com.example.lolchampions.R


@Composable
fun ChampionListScreen(
    modifier: Modifier = Modifier
) {

    val championsRepository = ChampionRepository()

    LazyColumn(

    ) {
        items(
            items = championsRepository.readAll()
            key = {
                champion : Champion ->
                    champion.id
            }
        ) {
            champion ->
                ChampionItem(champion)

        }
    }
}

@Composable
fun ChampionItem (
    champion:Champion
){
    Image(painterResource(id=R))
    Text(champion.name)
}

@Composable
@Preview
fun ChampionItemPreview(

){
    val annie = Champion(id=1,name="Annie")
    Text(annie.name)
}