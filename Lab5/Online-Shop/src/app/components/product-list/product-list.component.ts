import { Component, input, ChangeDetectionStrategy, signal, effect } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Product } from '../../models/product.model'
import { ProductItemComponent } from '../product-item/product-item.component'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  products = input<Product[]>()
  displayedProducts = signal<Product[]>([])

  constructor() {
    effect(() => {
      const p = this.products()
      this.displayedProducts.set(p ? [...p] : [])
    })
  }

  onProductDeleted(productId: number): void {
    const filtered = this.displayedProducts().filter(p => p.id !== productId)
    this.displayedProducts.set(filtered)
  }

}
