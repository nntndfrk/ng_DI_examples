import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {CounterComponent} from './counter/counter.component';
import {CounterService} from './counter.service';
import {OtherCounterComponent} from './other-counter/other-counter.component';

const localCounter: CounterService = {
  count: 0,
  increaseCount: function () {
    this.count += 2;
    console.log(`from Object - ${this.count}`);
    return this.count;
  }
};


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
    // {provide: CounterService, useClass: CounterService},
    {provide: CounterService, useValue: localCounter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
