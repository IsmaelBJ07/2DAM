import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should load and display products from the API', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const peticion = TestBed.inject(HttpTestingController).expectOne(
      'https://fakestoreapi.com/products'
    );
    expect(peticion.request.method).toBe('GET');
    peticion.flush([
      {
        id: 1,
        title: 'Mochila',
        price: 109.95,
        category: 'ropa',
        image: 'https://ejemplo.com/mochila.jpg'
      }
    ]);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Catálogo de productos');
    expect(compiled.querySelector('article h2')?.textContent).toContain('Mochila');
    expect(compiled.querySelector('.categoria')?.textContent).toContain('ropa');
    expect(compiled.querySelector('.precio')?.textContent).toContain('109.95');
    expect(compiled.querySelector('img')?.getAttribute('alt')).toBe('Mochila');

    TestBed.inject(HttpTestingController).verify();
  });
});
