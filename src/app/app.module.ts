import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { NabadyComponent } from './nabady/nabady.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './create-product/create-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    NabadyComponent,
    CreateProductComponent,
    HeaderComponent,
    FooterComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports : [
    ViewProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
