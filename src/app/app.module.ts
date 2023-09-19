import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { NavbarOldComponent } from './Components/navbar-old/navbar-old.component';
import { DropdownOldComponent } from './Components/dropdown-old/dropdown-old.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    NavbarOldComponent,
    DropdownOldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
