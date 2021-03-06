import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

import { DetailsUserComponent } from './details-user/details-user.component';
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ProduitComponent } from './produit/produit.component';

// import {NgShadowModule} from "nativescript-ng-shadow";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { TestSoundComponent } from './test-sound/test-sound.component';
import { TestComponent } from './test/test.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModifComponent } from './modif/modif.component';
import { RequettebackComponent } from './requetteback/requetteback.component';

import { ProduitService } from "./produit.service";
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        // NgShadowModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        DetailsUserComponent,
        ProduitComponent,
        TestComponent,
        TestSoundComponent,
        StatusComponent,
        ListComponent,
        ModifComponent,
        RequettebackComponent,
        InscriptionComponent,
    ],
    providers: [ProduitService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
