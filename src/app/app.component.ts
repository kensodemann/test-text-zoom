import { Component } from '@angular/core';
import { TextZoom } from '@capacitor/text-zoom';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    TextZoom.getPreferred().then((value) => TextZoom.set(value));
  }
}
