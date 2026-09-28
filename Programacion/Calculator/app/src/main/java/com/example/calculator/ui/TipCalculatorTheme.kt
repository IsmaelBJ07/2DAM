package com.example.calculator.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.calculator.ui.theme.CalculatorTheme

@Composable
@Preview
fun TipCalculatorScreenPreview() {
    CalculatorTheme {
        TipCalculatorScreen()
    }
}

@Composable
fun TipCalculatorScreen() {
    var totalAmount by remember { mutableStateOf("") }
    var guestNumber by remember { mutableStateOf("") }
    var checked by remember { mutableStateOf(false) }
    var tipValue by remember { mutableFloatStateOf(0f) }
    var postCalculo by remember { mutableFloatStateOf(0f) }

    Scaffold(
        modifier = Modifier.fillMaxSize()
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .consumeWindowInsets(paddingValues = innerPadding)
                .padding(paddingValues = innerPadding)
                .padding(horizontal = 8.dp),
            // Separación vertical entre todos los elementos
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            TextField(
                modifier = Modifier.fillMaxWidth(),
                value = totalAmount,
                onValueChange = { totalAmount = it },
                label = { Text("Importe total") },
                singleLine = true,
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal)
            )
            TextField(
                modifier = Modifier.fillMaxWidth(),
                value = guestNumber,
                onValueChange = { guestNumber = it },
                label = { Text("Número de comensales") },
                singleLine = true,
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
            )
            Row(
                modifier = Modifier.fillMaxWidth(fraction = 0.37f),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("Propina")
                Switch(
                    checked = checked,
                    onCheckedChange = { checked = it },
                )
            }
            Slider(
                modifier = Modifier.padding(horizontal = 8.dp),
                enabled = checked,
                value = tipValue,
                onValueChange = { tipValue = it },
                steps = 3,
                valueRange = 0f..4f
            )
            Button(
                modifier = Modifier.fillMaxWidth(),
                onClick = {
                          postCalculo =  totalAmount.toFloat() / guestNumber.toFloat()
                            if(checked){
                                when(tipValue) {
                                    1.0f -> {
                                        postCalculo *= 1.2f
                                    }
                                    2.0f -> {
                                        postCalculo *= 1.5f
                                    }
                                    3.0f -> {
                                        postCalculo *= 1.7f
                                    }
                                    4.0f -> {
                                        postCalculo *= 2.0f
                                    }
                                }
                            }
                          },
            ) {
                Text("Calcular")
            }
            Text("Pago por persona: " + postCalculo + "€")
        }
    }
}