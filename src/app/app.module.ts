import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './components/@material/material.module';
import { PagesModule } from './pages/pages.module';
import 'hammerjs';

import { AppComponent } from './app.component';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
