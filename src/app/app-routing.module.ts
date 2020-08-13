import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";
import { ProduitComponent } from "./produit/produit.component";

const routes: Routes = [
    { path: "", redirectTo: "/produit", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "user", component: UserComponent},
    { path: "detailsUser" , component: DetailsUserComponent},
    { path: "produit" , component: ProduitComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
