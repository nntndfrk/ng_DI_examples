import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {CounterComponent} from './counter/counter.component';
import {CounterService} from './counter.service';
import {OtherCounterComponent} from './other-counter/other-counter.component';
import {LoggerService} from './logger.service';
import {OtherLoggerService} from './other-logger.service';

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
  providers: [
    CounterService,
    {provide: LoggerService, useClass: LoggerService},
    {provide: OtherLoggerService, useExisting: LoggerService},
    // {provide: OtherLoggerService, useClass: OtherLoggerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
