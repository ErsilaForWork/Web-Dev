import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, RouterModule, Router } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product.model'
import { ViewStateService } from '../../services/view-state.service'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product | undefined
  stars = [0, 1, 2, 3, 4]
  selectedImage: string | undefined
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private viewState: ViewStateService) {
    const idParam = route.snapshot.paramMap.get('id')
    const id = idParam ? Number(idParam) : NaN
    if (!Number.isNaN(id)) {
      this.product = productService.getProductById(id)
      if (this.product) {
        this.selectedImage =
          this.product.images && this.product.images.length > 0
            ? this.product.images[0]
            : this.product.image
        // set view state to this product id
        this.viewState.setDetail(id)
      }
    }
  }

  getFilledStars(rating: number): number {
    return Math.round(rating)
  }

  selectImage(image: string): void {
    this.selectedImage = image
  }

  shareWhatsApp(product: Product): void {
    const text = `Check out this product: ${product.link}`
    const url = `https://wa.me/?text=${text}`
    window.open(url, '_blank')
  }

  shareTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${product.link}&text=${product.name}`
    window.open(url, '_blank')
  }

  goBack(event?: MouseEvent): void {
    if (event) {
      event.preventDefault()
    }
    // reset to list state and navigate
    this.viewState.setList()
    this.router.navigate(['/'])
  }
}
