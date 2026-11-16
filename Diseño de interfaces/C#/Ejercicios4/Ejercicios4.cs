using System;

delegate int Operacion(int numero1, int numero2);
delegate int Operar(int numero1, int numero2);
delegate int OperarArray(int[] numeros);
delegate int Transformar(int numero);
delegate int OperacionCallback(int numero1, int numero2);
delegate double Calculo(double numero);

class Program
{
    static void Main()
    {
        Ejercicio01();
        Console.WriteLine();

        Ejercicio02();
        Console.WriteLine();

        Ejercicio03();
        Console.WriteLine();

        Ejercicio04();
        Console.WriteLine();

        Ejercicio05();
        Console.WriteLine();

        Ejercicio06();
        Console.WriteLine();

        Ejercicio07();
        Console.WriteLine();

        Ejercicio08();
        Console.WriteLine();

        Ejercicio09();
        Console.WriteLine();

        Ejercicio10();
    }

    // Ejercicio01
    static void Ejercicio01()
    {
        int numero1 = 8;
        int numero2 = 4;

        Operacion operacion = Sumar;
        Console.WriteLine("Suma: " + operacion(numero1, numero2));
    }

    static int Sumar(int numero1, int numero2)
    {
        return numero1 + numero2;
    }

    // Ejercicio02
    static void Ejercicio02()
    {
        int numero1 = 8;
        int numero2 = 4;

        Operacion suma = Sumar;
        Operacion resta = Restar;

        Console.WriteLine("Suma: " + suma(numero1, numero2));
        Console.WriteLine("Resta: " + resta(numero1, numero2));
    }

    static int Restar(int numero1, int numero2)
    {
        return numero1 - numero2;
    }

    // Ejercicio03
    static void Ejercicio03()
    {
        int numero1 = 8;
        int numero2 = 4;

        Operacion operaciones = Sumar;
        operaciones += Restar;
        operaciones += Multiplicar;

        Console.WriteLine("Resultado del delegado: " + operaciones(numero1, numero2));
    }

    static int Multiplicar(int numero1, int numero2)
    {
        return numero1 * numero2;
    }

    // Ejercicio04
    static void Ejercicio04()
    {
        int numero1 = 8;
        int numero2 = 4;

        Operacion operaciones = Sumar;
        operaciones += Restar;
        operaciones += Multiplicar;
        operaciones += Dividir;

        Console.WriteLine("Resultado del delegado: " + operaciones(numero1, numero2));
    }

    static int Dividir(int numero1, int numero2)
    {
        if (numero2 == 0)
        {
            Console.WriteLine("No se puede dividir entre cero.");
            return 0;
        }

        return numero1 / numero2;
    }

    // Ejercicio05
    static void Ejercicio05()
    {
        int numero1 = 8;
        int numero2 = 4;

        MostrarResultado(Sumar, numero1, numero2);
        MostrarResultado(Restar, numero1, numero2);
        MostrarResultado(Multiplicar, numero1, numero2);
    }

    static void MostrarResultado(Operacion operacion, int numero1, int numero2)
    {
        Console.WriteLine("Resultado: " + operacion(numero1, numero2));
    }

    // Ejercicio06
    static void Ejercicio06()
    {
        int numero1 = 8;
        int numero2 = 4;

        Operar[] operaciones = { Suma, Resta, Multiplicacion };
        string[] nombres = { "Suma", "Resta", "Multiplicacion" };

        for (int i = 0; i < operaciones.Length; i++)
        {
            Console.WriteLine(nombres[i] + ": " + operaciones[i](numero1, numero2));
        }
    }

    static int Suma(int numero1, int numero2)
    {
        return numero1 + numero2;
    }

    static int Resta(int numero1, int numero2)
    {
        return numero1 - numero2;
    }

    static int Multiplicacion(int numero1, int numero2)
    {
        return numero1 * numero2;
    }

    // Ejercicio07
    static void Ejercicio07()
    {
        int[] numeros = { 2, 3, 4 };

        OperarArray[] operaciones = { SumarArray, MultiplicarArray };
        string[] nombres = { "Suma", "Multiplicacion" };

        for (int i = 0; i < operaciones.Length; i++)
        {
            Console.WriteLine(nombres[i] + ": " + operaciones[i](numeros));
        }
    }

    static int SumarArray(int[] numeros)
    {
        int suma = 0;

        for (int i = 0; i < numeros.Length; i++)
        {
            suma = suma + numeros[i];
        }

        return suma;
    }

    static int MultiplicarArray(int[] numeros)
    {
        int resultado = 1;

        for (int i = 0; i < numeros.Length; i++)
        {
            resultado = resultado * numeros[i];
        }

        return resultado;
    }

    // Ejercicio08
    static void Ejercicio08()
    {
        int numero = 5;

        Transformar[] transformaciones = { Doblar, Triplicar, Cuadrado };
        string[] nombres = { "Doblar", "Triplicar", "Cuadrado" };

        for (int i = 0; i < transformaciones.Length; i++)
        {
            Console.WriteLine(nombres[i] + ": " + transformaciones[i](numero));
        }
    }

    static int Doblar(int numero)
    {
        return numero * 2;
    }

    static int Triplicar(int numero)
    {
        return numero * 3;
    }

    static int Cuadrado(int numero)
    {
        return numero * numero;
    }

    // Ejercicio09
    static void Ejercicio09()
    {
        int numero1 = 8;
        int numero2 = 4;

        Console.WriteLine("Suma: " + EjecutarOperacion(SumaCallback, numero1, numero2));
        Console.WriteLine("Resta: " + EjecutarOperacion(RestaCallback, numero1, numero2));
        Console.WriteLine("Multiplicacion: " + EjecutarOperacion(MultiplicarCallback, numero1, numero2));
    }

    static int EjecutarOperacion(OperacionCallback operacion, int numero1, int numero2)
    {
        return operacion(numero1, numero2);
    }

    static int SumaCallback(int numero1, int numero2)
    {
        return numero1 + numero2;
    }

    static int RestaCallback(int numero1, int numero2)
    {
        return numero1 - numero2;
    }

    static int MultiplicarCallback(int numero1, int numero2)
    {
        return numero1 * numero2;
    }

    // Ejercicio10
    static void Ejercicio10()
    {
        double numero = 9;

        MostrarCalculo(RaizCuadrada, numero);
        MostrarCalculo(Logaritmo, numero);
        MostrarCalculo(RaizCuadrada, -1);
    }

    static double RaizCuadrada(double numero)
    {
        if (numero < 0)
        {
            throw new ArgumentException("No se puede calcular la raíz de un número negativo.");
        }

        return Math.Sqrt(numero);
    }

    static double Logaritmo(double numero)
    {
        if (numero <= 0)
        {
            throw new ArgumentException("El logaritmo necesita un número mayor que cero.");
        }

        return Math.Log(numero);
    }

    static void MostrarCalculo(Calculo calculo, double numero)
    {
        try
        {
            Console.WriteLine("Resultado: " + calculo(numero));
        }
        catch (ArgumentException error)
        {
            Console.WriteLine("Error: " + error.Message);
        }
    }
}
