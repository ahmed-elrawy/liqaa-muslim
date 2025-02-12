import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { AboutComponent } from './core/pages/about/about.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
