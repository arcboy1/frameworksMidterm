import {Component, OnInit} from '@angular/core';
import {StudentInterface} from "../student.interface";
import {ContentService} from "../content.service";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit{
  contents: StudentInterface[]=[];

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getContent()
      .subscribe(contents => this.contents = contents);
  }





}
