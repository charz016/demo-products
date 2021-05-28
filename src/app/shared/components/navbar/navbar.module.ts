import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";


const COMMON_IMPORTS = [
    CommonModule,
];

const COMMON_DECLARATIONS = [NavbarComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class NavbarModule { }

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}