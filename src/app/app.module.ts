import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';

import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ItemService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
