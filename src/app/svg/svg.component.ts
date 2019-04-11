import { Component, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  template: `
  <svg *ngIf="parsed">
  </svg>
  `
})
export class SvgComponent implements AfterContentInit {
  @Input() parsed: any;
  tagName: string;
  attributes: any;
  hasChildren: boolean;
  children: any[];

  constructor(svgParsed: any) {
    this.parsed = svgParsed;
  }

  ngAfterContentInit() {
    this.tagName = this.parsed.name;
    this.attributes = this.parsed.attributes;
    this.hasChildren = this.parsed.children.length > 0;
    this.children = this.parsed.children;
    console.log(this);
  }


}
