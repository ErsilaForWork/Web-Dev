import { Component, input, output, ChangeDetectionStrategy, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Product } from '../../models/product.model'
import { ProductService } from '../../services/product.service'
import { Router } from '@angular/router'
import { ViewStateService } from '../../services/view-state.service'

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  product = input.required<Product>()
  productDeleted = output<number>()

  protected productService = inject(ProductService)
  protected readonly stars = [0, 1, 2, 3, 4]
  protected viewState = inject(ViewStateService)

  constructor(private router: Router) {}

  getFilledStars(rating: number): number {
    return Math.round(rating)
  }

  onLike(): void {
    if (this.product()) {
      this.productService.likeProduct(this.product().id)
    }
  }

  onDelete(): void {
    const productId = this.product().id
    this.productService.deleteProduct(productId)
    this.productDeleted.emit(productId)
  }

  shareWhatsApp(event: MouseEvent): void {
    event.stopPropagation()
    const product = this.product()
    const text = `Check out this product: ${product.link}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  shareTelegram(event: MouseEvent): void {
    event.stopPropagation()
    const product = this.product()
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`
    window.open(url, '_blank')
  }

  goToDetails(id: number): void {
    this.viewState.setDetail(id)
    this.router.navigate(['/products', id])
  }

}
