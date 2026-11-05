import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly urlApi = 'http://localhost:3000/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.urlApi);
  }

  getGame(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`${this.urlApi}/${id}`);
  }

  getGamesPage(
    pagina: number,
    limite: number,
    genero = '',
    plataforma = '',
    precioMinimo: number | null = null,
    precioMaximo: number | null = null
  ): Observable<HttpResponse<Videojuego[]>> {
    const parametros = this.crearParametros(
      pagina,
      limite,
      genero,
      plataforma,
      '',
      precioMinimo,
      precioMaximo
    );

    return this.http.get<Videojuego[]>(this.urlApi, {
      params: parametros,
      observe: 'response'
    });
  }

  searchGames(
    texto: string,
    pagina = 1,
    limite = 5,
    genero = '',
    plataforma = '',
    precioMinimo: number | null = null,
    precioMaximo: number | null = null
  ): Observable<HttpResponse<Videojuego[]>> {
    const parametros = this.crearParametros(
      pagina,
      limite,
      genero,
      plataforma,
      texto,
      precioMinimo,
      precioMaximo
    );

    return this.http.get<Videojuego[]>(this.urlApi, {
      params: parametros,
      observe: 'response'
    });
  }

  private crearParametros(
    pagina: number,
    limite: number,
    genero: string,
    plataforma: string,
    texto: string,
    precioMinimo: number | null,
    precioMaximo: number | null
  ): HttpParams {
    let parametros = new HttpParams()
      .set('_page', pagina)
      .set('_limit', limite);

    if (genero) {
      parametros = parametros.set('genre', genero);
    }

    if (plataforma) {
      parametros = parametros.set('platform', plataforma);
    }

    if (texto) {
      parametros = parametros.set('title_like', texto);
    }

    if (precioMinimo !== null) {
      parametros = parametros.set('price_gte', precioMinimo);
    }

    if (precioMaximo !== null) {
      parametros = parametros.set('price_lte', precioMaximo);
    }

    return parametros;
  }
}
