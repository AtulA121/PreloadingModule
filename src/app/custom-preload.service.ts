import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadingStrategy{

  constructor() { }
  preload(route: import("@angular/router").Route, fn: () => import("rxjs").Observable<any>): import("rxjs").Observable<any> {
    let result=of(null);
    if(route.data && route.data['preload']){
      result=fn();
    }
    return result;
  }
}
