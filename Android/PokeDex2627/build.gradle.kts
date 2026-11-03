// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.compose) apply false
    alias(libs.plugins.ksp) apply false
    alias(libs.plugins.hilt) apply false
    // ANTES (versión 2.0.21 no coincidía con Kotlin 2.4.21 y ni siquiera se usaba):
    // kotlin("plugin.serialization") version "2.0.21" apply false
}
