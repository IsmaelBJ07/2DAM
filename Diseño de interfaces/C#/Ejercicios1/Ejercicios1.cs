using System;

class Program
{
    // Ejercicio01
    static void Ejercicio01()
    {
        Console.Write("Introduce el primer número: ");
        double numero1 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el segundo número: ");
        double numero2 = double.Parse(Console.ReadLine());

        Console.WriteLine($"Suma: {numero1 + numero2}");
        Console.WriteLine($"Resta: {numero1 - numero2}");
        Console.WriteLine($"Multiplicación: {numero1 * numero2}");
        Console.WriteLine($"Módulo: {numero1 % numero2}");
    }

    // Ejercicio02
    static void Ejercicio02()
    {
        const decimal PRECIO_HAMBURGUESA = 5.50m;
        const decimal PRECIO_PAPAS = 2.00m;
        const decimal PRECIO_BEBIDA = 1.50m;

        Console.Write("Número de hamburguesas: ");
        int hamburguesas = int.Parse(Console.ReadLine());

        Console.Write("Número de papas: ");
        int papas = int.Parse(Console.ReadLine());

        Console.Write("Número de bebidas: ");
        int bebidas = int.Parse(Console.ReadLine());

        decimal total = hamburguesas * PRECIO_HAMBURGUESA
            + papas * PRECIO_PAPAS
            + bebidas * PRECIO_BEBIDA;

        Console.WriteLine($"Total a pagar: {total:C}");
    }

    // Ejercicio03
    static void Ejercicio03()
    {
        Console.Write("Introduce un número: ");
        double numero = double.Parse(Console.ReadLine());

        Console.WriteLine($"Valor absoluto: {Math.Abs(numero)}");
        Console.WriteLine($"Potencia al cubo: {Math.Pow(numero, 3)}");
        Console.WriteLine($"Raíz cuadrada: {Math.Sqrt(numero)}");
        Console.WriteLine($"Seno (en radianes): {Math.Sin(numero)}");
        Console.WriteLine($"Coseno (en radianes): {Math.Cos(numero)}");
        Console.WriteLine($"Máximo entre {numero} y 5: {Math.Max(numero, 5)}");
        Console.WriteLine($"Mínimo entre {numero} y 5: {Math.Min(numero, 5)}");
    }

    // Ejercicio04
    static void Ejercicio04()
    {
        Console.Write("Introduce el valor de un lado del cuadrado: ");
        double lado = double.Parse(Console.ReadLine());

        double perimetro = lado * 4;

        Console.WriteLine($"El perímetro del cuadrado es: {perimetro}");
    }

    // Ejercicio05
    static void Ejercicio05()
    {
        Console.Write("Introduce el primer número: ");
        double numero1 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el segundo número: ");
        double numero2 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el tercer número: ");
        double numero3 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el cuarto número: ");
        double numero4 = double.Parse(Console.ReadLine());

        Console.WriteLine($"Suma de los dos primeros: {numero1 + numero2}");
        Console.WriteLine($"Producto del tercero y el cuarto: {numero3 * numero4}");
    }

    // Ejercicio06
    static void Ejercicio06()
    {
        Console.Write("Introduce el primer número: ");
        double numero1 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el segundo número: ");
        double numero2 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el tercer número: ");
        double numero3 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el cuarto número: ");
        double numero4 = double.Parse(Console.ReadLine());

        double suma = numero1 + numero2 + numero3 + numero4;
        double promedio = suma / 4;

        Console.WriteLine($"Suma: {suma}");
        Console.WriteLine($"Promedio: {promedio}");
    }

    // Ejercicio07
    static void Ejercicio07()
    {
        Console.Write("Introduce el precio del artículo: ");
        decimal precio = decimal.Parse(Console.ReadLine());

        Console.Write("Introduce la cantidad: ");
        int cantidad = int.Parse(Console.ReadLine());

        decimal total = precio * cantidad;

        Console.WriteLine($"El coste total es: {total:C}");
    }

    // Ejercicio08
    static void Ejercicio08()
    {
        Console.Write("Introduce la primera nota parcial: ");
        double parcial1 = double.Parse(Console.ReadLine());

        Console.Write("Introduce la segunda nota parcial: ");
        double parcial2 = double.Parse(Console.ReadLine());

        Console.Write("Introduce la nota del examen: ");
        double examen = double.Parse(Console.ReadLine());

        Console.Write("Introduce la nota del trabajo final: ");
        double trabajo = double.Parse(Console.ReadLine());

        double promedioParciales = (parcial1 + parcial2) / 2;
        double notaFinal = promedioParciales * 0.50 + examen * 0.30 + trabajo * 0.20;

        Console.WriteLine($"La nota final es: {notaFinal}");
    }

    // Ejercicio09
    static void Ejercicio09()
    {
        Console.Write("Introduce la aportación del socio 1: ");
        decimal socio1 = decimal.Parse(Console.ReadLine());

        Console.Write("Introduce la aportación del socio 2: ");
        decimal socio2 = decimal.Parse(Console.ReadLine());

        Console.Write("Introduce la aportación del socio 3: ");
        decimal socio3 = decimal.Parse(Console.ReadLine());

        decimal total = socio1 + socio2 + socio3;

        if (total == 0)
        {
            Console.WriteLine("Las aportaciones no pueden sumar cero.");
        }
        else
        {
            decimal porcentaje1 = socio1 / total * 100;
            decimal porcentaje2 = socio2 / total * 100;
            decimal porcentaje3 = socio3 / total * 100;

            Console.WriteLine($"El porcentaje del socio 1 es {porcentaje1}%, del socio 2 es {porcentaje2}% y del socio 3 es {porcentaje3}%");
        }
    }

    // Ejercicio10
    static void Ejercicio10()
    {
        Console.Write("Introduce una dirección web: ");
        string direccion = Console.ReadLine();

        bool empiezaPorWww = direccion.StartsWith("www");

        Console.WriteLine(empiezaPorWww);
    }
}
