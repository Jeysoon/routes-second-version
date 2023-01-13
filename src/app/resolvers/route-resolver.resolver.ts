import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverResolver implements Resolve<boolean> {
  //Needs to hard code return subclassId and viewId get it from the route
  // viewId;
  // subclassId;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  const viewId = route.paramMap.get('viewId');
  const subclassId = route.paramMap.get('subclassId');
    return of(true);
  }
}
