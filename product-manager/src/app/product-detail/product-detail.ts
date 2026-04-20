import { Component, Input } from '@angular/core'; // Ricorda l'import di Input
import { Product } from '../product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  standalone: true,
  imports: [ CommonModule],
  styleUrls: ['./product-detail.css']
})

export class ProductDetailComponent {
  @Input() product: Product | null = null; // La porta d'ingresso dei dati
}