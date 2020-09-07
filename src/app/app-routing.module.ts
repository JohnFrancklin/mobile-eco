import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";
import { ProduitComponent } from "./produit/produit.component";
import { TestComponent } from "./test/test.component";
import { TestSoundComponent } from "./test-sound/test-sound.component";
import { StatusComponent } from "./status/status.component";
import { ListComponent } from "./list/list.component";
import { ModifComponent } from "./modif/modif.component";



const routes: Routes = [
    { path: "", redirectTo: "/modif", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "user", component: UserComponent},
    { path: "detailsUser" , component: DetailsUserComponent},
    { path: "produit" , component: ProduitComponent},
    { path: "test" , component: TestComponent},
    { path: "testSound" , component: TestSoundComponent},
    { path: "status" , component: StatusComponent},
    { path: "list" , component: ListComponent},
    { path: "modif" , component: ModifComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
