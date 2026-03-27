import { Component, computed, inject, signal, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductService } from './services/product.service'
import { ProductListComponent } from './components/product-list/product-list.component'
import { Category } from './models/category.model'
import { RouterOutlet } from '@angular/router';
import { ViewStateService } from './services/view-state.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = 'Online Store'

  private productService = inject(ProductService)
  protected viewState = inject(ViewStateService)

  protected categories = signal<Category[]>([])
  protected selectedCategoryId = signal<number>(1)
  protected state = -1

  protected selectedCategoryProducts = computed(() => {
    const categoryId = this.selectedCategoryId()
    if (categoryId === null) {
      return []
    }
    return this.productService.getProductsByCategory(categoryId)
  })

  protected selectedCategory = computed(() => {
    const categoryId = this.selectedCategoryId()
    if (categoryId === null) return null
    return this.categories().find(c => c.id === categoryId)
  })

  ngOnInit(): void {
    this.categories.set(this.productService.getCategories())
    if (this.categories().length > 0) {
      this.selectedCategoryId.set(this.categories()[0].id)
    }
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId)
  }

  changeState(state: number) {
    this.state = state;
    if (state > 0) this.viewState.setDetail(state)
    else this.viewState.setList()
  }

  protected isDetailPage = computed(() => this.viewState.pageState() > 0)
}
