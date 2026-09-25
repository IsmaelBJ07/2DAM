package com.example.calculator.ui

import android.transition.Slide
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.VerticalAlignmentLine
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.calculator.ui.theme.CalculatorTheme
import java.lang.Compiler.enable


@Composable
@Preview
fun TipCalculatorScreenPreview() {
    CalculatorTheme {
        TipCalculatorScreen()
    }
}

@Composable
fun TipCalculatorScreen() {
    var totalAmount:String by remember { mutableStateOf( value = "") }
    var guestNumber:String by remember { mutableStateOf( value = "") }
    var checked = false
    var tipValue = 0.0f
    Scaffold (
        //ajustar tamaño pantalla
        modifier = Modifier.fillMaxSize()
    ) {
            innerPadding ->
        //Para que este debajo de las notis
        val columnModifier = Modifier
            .consumeWindowInsets(paddingValues = innerPadding)
            .padding(paddingValues = innerPadding)
        Column (modifier = columnModifier) {
            TextField(
                //Para que ocupe horizontalmente too
                modifier = Modifier.fillMaxWidth()
                    .padding(horizontal = 8.dp),
                value = totalAmount,
                onValueChange = {},
            )
            TextField(
                modifier = Modifier.fillMaxWidth()
                    .padding(horizontal = 8.dp),
                value = guestNumber,
                onValueChange = {},
            )
            Row (
                modifier = Modifier.fillMaxWidth(fraction = 0.37f),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("Redondear")
                Switch(

                    checked = checked,
                    onCheckedChange = {}
                )
            }
            Slider(
                value = tipValue,
                onValueChange = {},
            )
            Button(
                modifier = Modifier.fillMaxWidth(),
                onClick = {},
            ) {
                Text("Calcular")
            }
            Text("")
        }
    }
}