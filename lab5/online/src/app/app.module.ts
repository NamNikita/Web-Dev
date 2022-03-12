import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadphoneItemComponent } from './headphone-item/headphone-item.component';
import { MouseItemComponent } from './mouse-item/mouse-item.component';
import { LaptopItemComponent } from './laptop-item/laptop-item.component';
import { KeyboardItemComponent } from './keyboard-item/keyboard-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadphoneItemComponent,
    MouseItemComponent,
    LaptopItemComponent,
    KeyboardItemComponent,
    ProductItemComponent,
    CategoryListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
