import { Component, Input, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnChanges {
  @Input() fileText: string;
  children: Array<SvgComponent>;
  inner: string;

  constructor() {
  }

  ngOnChanges() {
    this.inner = $(this.fileText).html();
    console.log(this);
  }

  getChildren(item: any) {
    if (typeof (item.children) !== 'undefined') {
      if (item.children.length > 0) {
        console.log(this);
        return item.children;
      }
    }
    return null;
  }

  getChildrenRecursive(item: any) {
    const children = this.getChildren(item);
    if (children) {
      for (let i = 0; i < item.children.length; i++) {
        const child = item.children[i];
        const childComponent = new SvgComponent();
        childComponent.fileText = this.inner;
        this.children.push(childComponent);
        this.getChildrenRecursive(child);
      }
    }
  }
}
