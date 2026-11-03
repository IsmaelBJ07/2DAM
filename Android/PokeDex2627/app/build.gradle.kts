plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.ksp)
    alias(libs.plugins.hilt)
    // ANTES (no se usa kotlinx.serialization, se usa Gson):
    // kotlin("plugin.serialization")
}

android {
    namespace = "com.alanturing.pokeapp2627"
    compileSdk {
        version = release(37)
    }

    defaultConfig {
        applicationId = "com.alanturing.pokeapp2627"
        // ANTES: minSdk = 35 (solo Android 15+, deja fuera a casi todos los móviles)
        minSdk = 26
        targetSdk = 37
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            optimization {
                enable = true
                packageScope = setOf("androidx.**", "kotlin.**", "kotlinx.**")
            }
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildFeatures {
        compose = true
    }
}

dependencies {

    // Retrofit
    // ANTES (strings sueltos):
    // implementation("com.squareup.retrofit2:retrofit:3.0.0")
    // implementation("com.squareup.retrofit2:converter-gson:3.0.0")
    implementation(libs.retrofit)
    implementation(libs.retrofit.converter.gson)

    // Imágenes (NUEVO)
    implementation(libs.coil.compose)
    implementation(libs.coil.network.okhttp)

    // Navigation
    implementation("androidx.hilt:hilt-lifecycle-viewmodel-compose:1.4.0")
    implementation(libs.androidx.navigation.compose)
    // ANTES:
    // implementation(libs.kotlinx.serialization.json)

    // ViewModel + collectAsStateWithLifecycle (NUEVO)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    implementation(libs.androidx.lifecycle.runtime.compose)

    // Hilt
    implementation(libs.hilt.android)
    ksp(libs.hilt.android.compiler)

    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.activity.compose)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    testImplementation(libs.junit)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.compose.ui.test.junit4)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(libs.androidx.junit)
    debugImplementation(libs.androidx.compose.ui.test.manifest)
    debugImplementation(libs.androidx.compose.ui.tooling)
}
