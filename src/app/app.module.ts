import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { SanitizeHtmlPipe } from './shared/sanitize-html/sanitize-html.pipe';
import { VboxDirective } from './shared/vbox/vbox.directive';
import { SvgModule } from './svg/svg.module';

@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    VboxDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    SvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
