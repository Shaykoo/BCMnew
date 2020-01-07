import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavService {


   navIsVisible = new BehaviorSubject('open');
   state = this.navIsVisible.asObservable();


  // navIsVisible = true;

  constructor() { }

  toggleNav(){
    this.navIsVisible.next('closed');
  }
}
