import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {CounterComponent} from './counter/counter.component';
import {OtherCounterComponent} from './other-counter/other-counter.component';
import {LOCAL_COUNTER, localCounter} from './counter';
import {CounterService} from './counter.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OtherCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule
  ],
  // providers: [CounterService],
  providers: [
    CounterService,
    {provide: LOCAL_COUNTER, useValue: localCounter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
