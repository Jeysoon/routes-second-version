import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { RouteResolverResolver } from './resolvers/route-resolver.resolver';
import { SubclassComponent } from './routes/subclass/subclass.component';
import { ViewDetailsComponent } from './routes/view-details/view-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'subclass/:subclassId',
    component: SubclassComponent,
    resolve: {
      routeData: RouteResolverResolver
    }
  },
  {
    path: 'view-details/:subclassId/:viewId',
    component: ViewDetailsComponent,
    resolve: {
      routeData: RouteResolverResolver
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
//Make the route folder with these three routes
//My resolver is gonna connect to the store and the store needs
// to retrieve me the viewDetails id


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
