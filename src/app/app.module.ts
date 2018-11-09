import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { UiModule } from './ui/ui.module';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SanitizeHtmlPipe,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
