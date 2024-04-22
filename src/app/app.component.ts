import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentService} from "./content.service";
import {StudentInterface} from "./student.interface";
import {ContentListComponent} from "./content-list/content-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test1';
  content: StudentInterface | undefined;
  constructor(private contentService: ContentService) {
  }



}
