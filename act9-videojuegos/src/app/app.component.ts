import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from './services/game.service';
import { Videojuego } from './models/videojuego';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'Catálogo de videojuegos';
  videojuegos: Videojuego[] = [];
  generoSeleccionado = '';
  plataformaSeleccionada = '';
  textoTitulo = '';
  precioMinimo: number | null = null;
  precioMaximo: number | null = null;
  paginaActual = 1;
  tamanoPagina = 5;
  totalElementos = 0;
  totalPaginas = 0;
  mensajeError = '';

  constructor(private servicioVideojuegos: GameService) {}

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  buscarPorId(textoId: string): void {
    const id = Number(textoId);

    if (!Number.isInteger(id) || id < 1) {
      this.mensajeError = 'Escribe un ID válido.';
      return;
    }

    this.mensajeError = '';
    this.servicioVideojuegos.getGame(id).subscribe({
      next: (videojuego) => {
        this.videojuegos = [videojuego];
        this.totalElementos = 1;
        this.totalPaginas = 1;
        this.paginaActual = 1;
      },
      error: () => {
        this.videojuegos = [];
        this.totalElementos = 0;
        this.totalPaginas = 0;
        this.paginaActual = 1;
        this.mensajeError = 'No se pudo encontrar el videojuego. Comprueba el ID y que JSON Server esté disponible.';
      }
    });
  }

  buscarPorTitulo(): void {
    this.paginaActual = 1;
    this.cargarVideojuegos();
  }

  cambiarGenero(genero: string): void {
    this.generoSeleccionado = genero;
    this.paginaActual = 1;
    this.cargarVideojuegos();
  }

  cambiarPlataforma(plataforma: string): void {
    this.plataformaSeleccionada = plataforma;
    this.paginaActual = 1;
    this.cargarVideojuegos();
  }

  aplicarPrecios(): void {
    if (
      this.precioMinimo !== null &&
      this.precioMaximo !== null &&
      this.precioMinimo > this.precioMaximo
    ) {
      this.mensajeError = 'El precio mínimo no puede superar al precio máximo.';
      return;
    }

    this.paginaActual = 1;
    this.cargarVideojuegos();
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarVideojuegos();
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarVideojuegos();
    }
  }

  private cargarVideojuegos(): void {
    this.mensajeError = '';
    const texto = this.textoTitulo.trim();
    const peticion = texto
      ? this.servicioVideojuegos.searchGames(
          texto,
          this.paginaActual,
          this.tamanoPagina,
          this.generoSeleccionado,
          this.plataformaSeleccionada,
          this.precioMinimo,
          this.precioMaximo
        )
      : this.servicioVideojuegos.getGamesPage(
          this.paginaActual,
          this.tamanoPagina,
          this.generoSeleccionado,
          this.plataformaSeleccionada,
          this.precioMinimo,
          this.precioMaximo
        );

    peticion.subscribe({
      next: (respuesta) => {
        this.videojuegos = respuesta.body ?? [];
        this.totalElementos = Number(respuesta.headers.get('X-Total-Count') ?? 0);
        this.totalPaginas = Math.ceil(this.totalElementos / this.tamanoPagina);
      },
      error: () => {
        this.videojuegos = [];
        this.totalElementos = 0;
        this.totalPaginas = 0;
        this.mensajeError = 'No se pudieron cargar los videojuegos. Comprueba que JSON Server esté disponible.';
      }
    });
  }
}
