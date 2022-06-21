import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CopyIfDirective } from './copy-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientCardComponent,
    AccountInfoComponent,
    CopyIfDirective,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
