import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { DetailsUserComponent } from './details-user/details-user.component';
import {NgShadowModule} from "nativescript-ng-shadow";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NgShadowModule,
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UserComponent,
        DetailsUserComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
