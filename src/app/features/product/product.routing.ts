import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { DetailProductModule } from "./pages/detail-product/detail-product.module";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DetailProductComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes),
        DetailProductModule]
})
export class ProductRoutingModule { }