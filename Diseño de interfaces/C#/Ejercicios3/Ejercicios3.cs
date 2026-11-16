using System;

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
        Console.WriteLine();
    }

    // Ejercicio01
    static void Ejercicio01()
    {
        Console.Write("Introduce el tamaño del array: ");
        int tamano = int.Parse(Console.ReadLine());

        int[] numeros = new int[tamano];

        for (int i = 0; i < tamano; i++)
        {
            Console.Write("Introduce el valor " + (i + 1) + ": ");
            numeros[i] = int.Parse(Console.ReadLine());
        }

        int suma = 0;

        for (int i = 0; i < numeros.Length; i++)
        {
            suma = suma + numeros[i];
        }

        double media = (double)suma / tamano;

        Console.WriteLine("La suma es: " + suma);
        Console.WriteLine("La media es: " + media);
    }

    // Ejercicio02
    static void Ejercicio02()
    {
        Console.Write("Introduce una cadena: ");
        string texto = Console.ReadLine();

        int espacios = ContarEspacios(texto);
        Console.WriteLine("El número de espacios es: " + espacios);
    }

    static int ContarEspacios(string texto)
    {
        int contador = 0;

        for (int i = 0; i < texto.Length; i++)
        {
            if (texto[i] == ' ')
            {
                contador++;
            }
        }

        return contador;
    }

    // Ejercicio03
    static void Ejercicio03()
    {
        Console.Write("Introduce un número: ");
        int numero = int.Parse(Console.ReadLine());

        int resultado = Factorial(numero);
        Console.WriteLine("El factorial de " + numero + " es: " + resultado);
    }

    static int Factorial(int numero)
    {
        if (numero == 0 || numero == 1)
        {
            return 1;
        }
        else
        {
            return numero * Factorial(numero - 1);
        }
    }

    // Ejercicio04
    static void Ejercicio04()
    {
        Console.Write("Introduce un número: ");
        int numero = int.Parse(Console.ReadLine());

        if (EsPrimo(numero))
        {
            Console.WriteLine(numero + " es primo.");
        }
        else
        {
            Console.WriteLine(numero + " no es primo.");
        }
    }

    static bool EsPrimo(int numero)
    {
        if (numero <= 1)
        {
            return false;
        }

        if (numero == 2)
        {
            return true;
        }

        if (numero % 2 == 0)
        {
            return false;
        }

        for (int i = 3; i * i <= numero; i = i + 2)
        {
            if (numero % i == 0)
            {
                return false;
            }
        }

        return true;
    }

    // Ejercicio05
    static void Ejercicio05()
    {
        Console.Write("Introduce la base: ");
        double baseNumero = double.Parse(Console.ReadLine());

        Console.Write("Introduce el exponente: ");
        int exponente = int.Parse(Console.ReadLine());

        double potenciaIterativa = PotenciaIterativa(baseNumero, exponente);
        double potenciaRecursiva = PotenciaRecursiva(baseNumero, exponente);

        Console.WriteLine("Potencia iterativa: " + potenciaIterativa);
        Console.WriteLine("Potencia recursiva: " + potenciaRecursiva);
    }

    static double PotenciaIterativa(double baseNumero, int exponente)
    {
        double resultado = 1;

        if (exponente >= 0)
        {
            for (int i = 1; i <= exponente; i++)
            {
                resultado = resultado * baseNumero;
            }
        }
        else
        {
            for (int i = 1; i <= -exponente; i++)
            {
                resultado = resultado / baseNumero;
            }
        }

        return resultado;
    }

    static double PotenciaRecursiva(double baseNumero, int exponente)
    {
        if (exponente == 0)
        {
            return 1;
        }
        else if (exponente > 0)
        {
            return baseNumero * PotenciaRecursiva(baseNumero, exponente - 1);
        }
        else
        {
            return 1 / PotenciaRecursiva(baseNumero, -exponente);
        }
    }

    // Ejercicio06
    static void Ejercicio06()
    {
        int intentos = 3;

        while (intentos > 0)
        {
            Console.Write("Usuario: ");
            string usuario = Console.ReadLine();

            Console.Write("Contraseña: ");
            string password = Console.ReadLine();

            if (usuario == "usuario2DAM" && password == "pass2DAM")
            {
                Console.WriteLine("Acceso correcto.");
                return;
            }
            else
            {
                intentos--;
                Console.WriteLine("Credenciales incorrectas. Te quedan " + intentos + " intento(s).");
            }
        }

        Console.WriteLine("Has agotado los tres intentos.");
    }

    // Ejercicio07
    static void Ejercicio07()
    {
        Console.Write("Introduce el primer número: ");
        int numero1 = int.Parse(Console.ReadLine());

        Console.Write("Introduce el segundo número: ");
        int numero2 = int.Parse(Console.ReadLine());

        if (EsMultiplo(numero1, numero2))
        {
            Console.WriteLine(numero1 + " es múltiplo de " + numero2);
        }
        else
        {
            Console.WriteLine(numero1 + " no es múltiplo de " + numero2);
        }
    }

    static bool EsMultiplo(int numero1, int numero2)
    {
        if (numero2 == 0)
        {
            Console.WriteLine("No se puede dividir entre 0.");
            return false;
        }

        return numero1 % numero2 == 0;
    }

    // Ejercicio08
    static void Ejercicio08()
    {
        Console.Write("Introduce un número: ");
        int numero = int.Parse(Console.ReadLine());

        int suma = SumaDigitos(numero);
        Console.WriteLine("La suma de los dígitos es: " + suma);
    }

    static int SumaDigitos(int numero)
    {
        if (numero < 10)
        {
            return numero;
        }
        else
        {
            return (numero % 10) + SumaDigitos(numero / 10);
        }
    }

    // Ejercicio09
    static void Ejercicio09()
    {
        int[] numeros = { 8, 12, 3, 5, 1, 9, 4 };

        int posicion = PosicionMenor(numeros);

        Console.WriteLine("La posición del número menor es: " + posicion);
        Console.WriteLine("El menor es: " + numeros[posicion]);
    }

    static int PosicionMenor(int[] numeros)
    {
        int menor = numeros[0];
        int posicion = 0;

        for (int i = 1; i < numeros.Length; i++)
        {
            if (numeros[i] < menor)
            {
                menor = numeros[i];
                posicion = i;
            }
        }

        return posicion;
    }

    // Ejercicio10
    static void Ejercicio10()
    {
        Banco banco = new Banco();
        banco.Operar();
        banco.ObtenerEstado();
    }
}

class Cliente
{
    private string nombre;
    private double cantidadTotal;

    public Cliente(string nombre)
    {
        this.nombre = nombre;
        cantidadTotal = 0;
    }

    public void Ingresar(double cantidad)
    {
        if (cantidad > 0)
        {
            cantidadTotal = cantidadTotal + cantidad;
        }
    }

    public void Sacar(double cantidad)
    {
        if (cantidad > 0 && cantidad <= cantidadTotal)
        {
            cantidadTotal = cantidadTotal - cantidad;
        }
    }

    public double GetCantidadTotal()
    {
        return cantidadTotal;
    }

    public void MostrarInformacion()
    {
        Console.WriteLine(this.nombre + ": " + this.cantidadTotal + " €");
    }
}

class Banco
{
    private Cliente[] clientes;

    public Banco()
    {
        clientes = new Cliente[3];
        clientes[0] = new Cliente("Cliente 1");
        clientes[1] = new Cliente("Cliente 2");
        clientes[2] = new Cliente("Cliente 3");
    }

    public void Operar()
    {
        clientes[0].Ingresar(1200);
        clientes[1].Ingresar(900);
        clientes[2].Ingresar(1500);
    }

    public void ObtenerEstado()
    {
        double totalBanco = 0;

        for (int i = 0; i < clientes.Length; i++)
        {
            totalBanco = totalBanco + clientes[i].GetCantidadTotal();
            clientes[i].MostrarInformacion();
        }

        Console.WriteLine("El dinero total ingresado en el banco es: " + totalBanco + " €");
    }
}
