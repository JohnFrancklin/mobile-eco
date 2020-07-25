import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { DetailsUserComponent } from "./details-user/details-user.component";

const routes: Routes = [
    { path: "", redirectTo: "/detailsUser", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "user", component: UserComponent},
    { path: "detailsUser" , component: DetailsUserComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
