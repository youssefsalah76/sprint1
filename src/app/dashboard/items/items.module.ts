import { NgModule } from '@angular/core';
import {ItemService} from '../../items.service'
import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';
import { ItemsItemComponent } from './items-item/items-item.component';
@NgModule({
  imports: [ThemeModule, ItemsRoutingModule,FormsModule, ReactiveFormsModule],
  declarations: [ItemsComponent,ItemsItemComponent],
  providers: [ItemService],
})
export class ItemsModule {}
