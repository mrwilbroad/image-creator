import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { corseInterceptor } from './interceptors/corse/corse.interceptor';
import { QuoteComponent } from './Component/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule 
  ],
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        corseInterceptor
      ])

    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
