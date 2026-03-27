import { Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ViewStateService {
  pageState = signal<number>(-1)

  setDetail(id: number) {
    this.pageState.set(id)
  }

  setList() {
    this.pageState.set(-1)
  }
}
