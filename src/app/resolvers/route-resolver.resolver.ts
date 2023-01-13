import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

export interface RouteData {
  viewId: string | null;
  subclassId: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class RouteResolverResolver implements Resolve<RouteData> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouteData> {
  const viewId = route.paramMap.get('viewId');
  const subclassId = route.paramMap.get('subclassId');
    return of({viewId, subclassId});
  }

}
