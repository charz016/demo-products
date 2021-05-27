import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-detail',
    loadChildren: () =>
        import('./features/product/product.module').then(
            m => m.ProductModule
        ),
},
{
    path: '**',
    redirectTo: 'product-detail',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
