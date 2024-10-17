import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomMeetingComponent } from './components/zoom-meeting/zoom-meeting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ZoomMeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    // .forRoot([{
    //   path:'meeting',
    //   component:ZoomMeetingComponent
    // }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
