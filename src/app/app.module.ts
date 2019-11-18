import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { YesformComponent } from './yesform/yesform.component';
import { NoformComponent } from './noform/noform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionComponent } from './selection/selection.component';
import { TestApiComponent } from './test-api/test-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmFormComponent } from './confirm-form/confirm-form.component';

//ANGULAR-MATERIAL-IMPORT
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    YesformComponent,
    NoformComponent,
    SelectionComponent,
    TestApiComponent,
    PageNotFoundComponent,
    ConfirmFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
