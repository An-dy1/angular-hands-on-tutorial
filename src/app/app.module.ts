import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameGridComponent } from './gamegrid/gamegrid.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GameGridComponent],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
