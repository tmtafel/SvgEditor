import { Component, Input } from '@angular/core';
import { SvgComponent } from './svg/svg.component';
import { parse } from 'svg-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() fileText: string;
  svg: SvgComponent;

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type === 'image/svg+xml') {
        reader.readAsText(file);
        reader.onload = () => {
          this.fileText = reader.result.toString();
          this.svg = new SvgComponent(parse(this.fileText));
        };
      } else {
        this.fileText = '<h2 class="text-center">upload only svg files</h2>';
      }
    }
  }
}
