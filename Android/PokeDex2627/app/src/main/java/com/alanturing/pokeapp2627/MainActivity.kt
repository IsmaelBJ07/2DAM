package com.alanturing.pokeapp2627

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import com.alanturing.pokeapp2627.features.pokemon.ui.PokemonListScreen
import com.alanturing.pokeapp2627.ui.theme.PokeApp2627Theme
import dagger.hilt.android.AndroidEntryPoint
// ANTES (imports sin usar):
// import androidx.compose.material3.Text
// import androidx.compose.runtime.Composable
// import androidx.compose.ui.tooling.preview.Preview

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            PokeApp2627Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    // ANTES: el Scaffold estaba vacío (pantalla en blanco) y innerPadding sin usar
                    PokemonListScreen(modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }
}
