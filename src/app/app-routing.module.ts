import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetSubclassDataResolver } from './resolvers/get-subclass-data.resolver';
import { RouteResolverResolver } from './resolvers/route-resolver.resolver';
import { SubclassComponent } from './subclass/subclass.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'subclass/:subclassId',
    component: SubclassComponent,
    resolve: RouteResolverResolver
  },
  {
    path: 'view-details/:subclassId/:viewId',
    component: ViewDetailsComponent,
    resolve: RouteResolverResolver
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
//My resolver is gonna connect to the store and the store needs
// to retrieve me the viewDetails id


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
