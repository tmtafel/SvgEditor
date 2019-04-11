import { Directive, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';
@Directive({
  selector: '[appVbox]'
})
export class VboxDirective {

  constructor(el: ElementRef) {
    $(el).attr('viewBox', this.viewbox);
   }
  @Input() viewbox: string;
}
