package com.example.lolchampions

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.lolchampions.ui.ChampionListScreen
import com.example.lolchampions.ui.theme.LOLChampionsTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LOLChampionsTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    ChampionListScreen(
                        modifier = Modifier
                            .consumeWindowInsets( paddingValues = innerPadding)
                            .padding( paddingValues = innerPadding)
                    )
                }
            }
        }
    }
}