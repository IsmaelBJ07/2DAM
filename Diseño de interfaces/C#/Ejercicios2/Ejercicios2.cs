using System;
using System.Collections;

class Program
{
    // Ejercicio01
    static void Ejercicio01()
    {
        Console.Write("Introduce el primer número: ");
        double numero1 = double.Parse(Console.ReadLine());

        Console.Write("Introduce el segundo número: ");
        double numero2 = double.Parse(Console.ReadLine());

        if (numero1 > numero2)
        {
            Console.WriteLine($"El número mayor es {numero1}");
        }
        else if (numero2 > numero1)
        {
            Console.WriteLine($"El número mayor es {numero2}");
        }
        else
        {
            Console.WriteLine($"Los dos números son iguales: {numero1}");
        }
    }

    // Ejercicio02
    static void Ejercicio02()
    {
        Console.Write("Introduce los kilovatios consumidos: ");
        double kilovatios = double.Parse(Console.ReadLine());

        double precio;

        if (kilovatios > 1800)
        {
            precio = 0.8;
        }
        else if (kilovatios >= 1000)
        {
            precio = 0.12;
        }
        else
        {
            precio = 0.14;
        }

        double total = kilovatios * precio;

        Console.WriteLine($"Total a pagar: {total:C}");
    }

    // Ejercicio03
    static void Ejercicio03()
    {
        Console.Write("Introduce tu estado civil (C, S, V o D): ");
        string entrada = Console.ReadLine();
        char estado = ' ';

        if (entrada.Length > 0)
        {
            estado = char.ToUpper(entrada[0]);
        }

        switch (estado)
        {
            case 'C':
                Console.WriteLine("Tu estado civil es Casad@");
                break;
            case 'S':
                Console.WriteLine("Tu estado civil es Solter@");
                break;
            case 'V':
                Console.WriteLine("Tu estado civil es Viud@");
                break;
            case 'D':
                Console.WriteLine("Tu estado civil es Divorciad@");
                break;
            default:
                Console.WriteLine("La opción introducida no es correcta.");
                break;
        }
    }

    // Ejercicio04
    static void Ejercicio04()
    {
        Console.Write("Introduce un número del 1 al 9: ");
        int numero = int.Parse(Console.ReadLine());

        while (numero < 1 || numero > 9)
        {
            Console.Write("El número debe estar entre 1 y 9. Inténtalo otra vez: ");
            numero = int.Parse(Console.ReadLine());
        }

        for (int multiplicador = 1; multiplicador <= 10; multiplicador++)
        {
            Console.WriteLine($"{numero} x {multiplicador} = {numero * multiplicador}");
        }
    }

    // Ejercicio05
    static void Ejercicio05()
    {
        Console.Write("Introduce una cadena de texto: ");
        string texto = Console.ReadLine();

        Console.WriteLine($"Longitud: {texto.Length}");
        Console.WriteLine($"¿Contiene la letra a?: {texto.Contains("a")}");
        Console.WriteLine($"Reemplazar a por e: {texto.Replace('a', 'e')}");
        Console.WriteLine($"Mayúsculas: {texto.ToUpper()}");
        Console.WriteLine($"Minúsculas: {texto.ToLower()}");

        if (texto.Length > 0)
        {
            Console.WriteLine($"Texto sin el carácter de la posición 0: {texto.Remove(0, 1)}");
        }
        else
        {
            Console.WriteLine("No hay caracteres que eliminar.");
        }

        int longitudMitad = texto.Length / 2;
        Console.WriteLine($"Primera mitad de la cadena: {texto.Substring(0, longitudMitad)}");
    }

    // Ejercicio06
    static void Ejercicio06()
    {
        Console.Write("Introduce un número entero entre 0 y 20: ");
        int numero = int.Parse(Console.ReadLine());

        while (numero < 0 || numero > 20)
        {
            Console.Write("El número debe estar entre 0 y 20. Inténtalo otra vez: ");
            numero = int.Parse(Console.ReadLine());
        }

        long factorial = 1;

        for (int i = 1; i <= numero; i++)
        {
            factorial = factorial * i;
        }

        Console.WriteLine($"El factorial de {numero} es {factorial}");
    }

    // Ejercicio07
    static void Ejercicio07()
    {
        for (int codigo = 90; codigo >= 65; codigo--)
        {
            Console.Write(Convert.ToString((char)codigo));
        }

        Console.WriteLine();
    }

    // Ejercicio08
    static void Ejercicio08()
    {
        Random aleatorio = new Random();
        int numero = aleatorio.Next(10, 31);

        Console.WriteLine($"Numero aleatiorio entre 10 y 30: {numero}");
    }

    // Ejercicio09
    static void Ejercicio09()
    {
        Console.Write("¿Cuántos números vas a poner?: ");
        int cantidad = int.Parse(Console.ReadLine());

        while (cantidad < 1)
        {
            Console.Write("Tiene que ser al menos 1. Prueba otra vez: ");
            cantidad = int.Parse(Console.ReadLine());
        }

        int[] numeros = new int[cantidad];

        for (int i = 0; i < numeros.Length; i++)
        {
            Console.Write($"Escribe el número de la posición {i}: ");
            numeros[i] = int.Parse(Console.ReadLine());
        }

        for (int i = 0; i < numeros.Length; i++)
        {
            if (numeros[i] % 2 == 0)
            {
                Console.WriteLine($"{numeros[i]} es par");
            }
            else
            {
                Console.WriteLine($"{numeros[i]} es impar");
            }
        }
    }

    // Ejercicio10
    static void Ejercicio10()
    {
        int[] numeros = { 8, 3, 10, 1, 6, 4, 9, 2, 7, 5 };

        Array.Sort(numeros);

        for (int i = 0; i < numeros.Length; i++)
        {
            Console.WriteLine(numeros[i]);
        }
    }

    // Ejercicio11
    static void Ejercicio11()
    {
        Console.Write("¿Cuántos números quieres introducir? (mínimo 2): ");
        int cantidad = int.Parse(Console.ReadLine());

        while (cantidad < 2)
        {
            Console.Write("Introduce al menos 2 números: ");
            cantidad = int.Parse(Console.ReadLine());
        }

        Stack pila = new Stack();

        for (int i = 0; i < cantidad; i++)
        {
            Console.Write($"Introduce el número {i + 1}: ");
            int numero = int.Parse(Console.ReadLine());
            pila.Push(numero);
        }

        Console.WriteLine("Valores de la pila:");

        foreach (int numero in pila)
        {
            Console.WriteLine(numero);
        }

        Console.WriteLine($"Se elimina el valor {pila.Pop()}");
        Console.WriteLine($"Se elimina el valor {pila.Pop()}");
        Console.WriteLine("Valores restantes en la pila:");

        foreach (int numero in pila)
        {
            Console.WriteLine(numero);
        }
    }
}
