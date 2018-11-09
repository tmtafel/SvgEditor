import { Component, Input } from '@angular/core';
import { parse } from 'svg-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() fileText: string;
  fileParsed: any;

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);
      reader.onload = () => {
        this.fileText = reader.result.toString();
        this.fileParsed = parse(this.fileText);
      };
    }
  }
}
