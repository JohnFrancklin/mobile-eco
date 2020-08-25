import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";
import { ProduitComponent } from "./produit/produit.component";
import { TestComponent } from "./test/test.component";
import { TestSoundComponent } from "./test-sound/test-sound.component";

const routes: Routes = [
    { path: "", redirectTo: "/testSound", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "user", component: UserComponent},
    { path: "detailsUser" , component: DetailsUserComponent},
    { path: "produit" , component: ProduitComponent},
    { path: "test" , component: TestComponent},
    { path: "testSound" , component: TestSoundComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
