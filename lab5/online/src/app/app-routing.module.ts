import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadphoneItemComponent } from './headphone-item/headphone-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { KeyboardItemComponent } from './keyboard-item/keyboard-item.component';
import { LaptopItemComponent } from './laptop-item/laptop-item.component';
import { MouseItemComponent } from './mouse-item/mouse-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/category-list', pathMatch: 'full' },
  { path: 'headphone', component: HeadphoneItemComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'keyboard', component: KeyboardItemComponent },
  { path: 'laptop', component: LaptopItemComponent },
  { path: 'mouse', component: MouseItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
