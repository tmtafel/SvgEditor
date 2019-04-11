import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  fileName: string;

  constructor() { }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type === 'image/svg+xml') {
        this.fileName = file.name;
      } else {
        event.target.files = null;
      }
    }
  }
}
