import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { YesformComponent } from './yesform/yesform.component';
import { NoformComponent } from './noform/noform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionComponent } from './selection/selection.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TestApiComponent } from './test-api/test-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmFormComponent } from './confirm-form/confirm-form.component';
import { TestComponent } from './test/test.component';
import {MatCardModule, MatCard} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveformComponent,
    YesformComponent,
    NoformComponent,
    SelectionComponent,
    TestApiComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ConfirmFormComponent,
    TestComponent,
  
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
