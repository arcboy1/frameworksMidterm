import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentService} from "./content.service";
import {StudentInterface} from "./student.interface";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test1';
  content: StudentInterface | undefined;
  constructor(private contentService: ContentService) {
  }



}
