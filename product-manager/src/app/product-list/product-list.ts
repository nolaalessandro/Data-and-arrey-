import { Component } from '@angular/core';
import { Product } from '../product-model'; 
import { ProductDetailComponent } from '../product-detail/product-detail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. AGGIUNGI QUESTO IMPORT

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, FormsModule], // 2. AGGIUNGI FormsModule QUI
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  
  products: Product[] = [
    { name: 'Smartphone', price: 699, description: 'Display OLED da 6 pollici' },
    { name: 'Laptop', price: 1200, description: 'Ottimo per programmatori' },
    { name: 'Cuffie BT', price: 150, description: 'Cancellazione del rumore' },
    { name: 'Monitor 4K', price: 400, description: 'Perfetto per il design' },
    { name: 'Tastiera Meccanica', price: 90, description: 'Switch Cherry MX Red' }
  ];

  selectedProduct: Product | null = null;

  // 3. AGGIUNGI QUESTA VARIABILE (serve per legare i campi del form)
  newProduct: Product = { name: '', price: 0, description: '' };

  onSelect(p: Product): void {
    console.log("Hai cliccato su:", p.name); // Questo manderà un messaggio segreto al browser
    this.selectedProduct = p;
  }

  deleteProduct(index: number): void {
    // Salviamo il prodotto che stiamo per eliminare per fare il controllo dopo
    const deletedProduct = this.products[index];
    
    this.products.splice(index, 1);

    // Se eliminiamo proprio quello che è visualizzato nel dettaglio, puliamo il dettaglio
    if (this.selectedProduct === deletedProduct) {
      this.selectedProduct = null;
    }
  }

  // 4. AGGIUNGI QUESTA FUNZIONE (per il tasto "Aggiungi")
  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price > 0) {
      // Usiamo lo spread [...] per creare un nuovo oggetto, altrimenti modificheresti sempre lo stesso
      this.products.push({ ...this.newProduct });
      
      // Resetta il form dopo l'aggiunta
      this.newProduct = { name: '', price: 0, description: '' };
    }
  }
}