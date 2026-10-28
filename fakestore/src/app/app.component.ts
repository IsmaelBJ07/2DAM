import { Component, OnInit, inject } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fakestore';
  products: Product[] = [];
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
