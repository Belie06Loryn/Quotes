import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DisplayQuoteDetailsComponent } from './display-quote-details/display-quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { WordsFormComponent } from './words-form/words-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DisplayQuoteDetailsComponent,
    DateCountPipe,
    WordsFormComponent
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
