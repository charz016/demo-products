import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./pages/detail-product/detail-product.module').then(m => m.DetailProductModule)
}]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProductRoutingModule{}