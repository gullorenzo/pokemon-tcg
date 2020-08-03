import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { OrderByPipe } from './order-by.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PodemonDatailsComponent } from './podemon-datails/podemon-datails.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AttackModalComponent } from './attack-modal/attack-modal.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PokemonCardsComponent,
    OrderByPipe,
    PodemonDatailsComponent,
    AttackModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en'
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
