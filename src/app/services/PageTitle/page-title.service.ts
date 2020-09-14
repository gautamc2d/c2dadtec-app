import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private titleSource = new BehaviorSubject<string>(" ");
  currentTitle = this.titleSource.asObservable();

  constructor() { }

  changeTitle(pageTitle: string) {
    this.titleSource.next(pageTitle);
  }
}
