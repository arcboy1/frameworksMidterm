import {Component, Input} from '@angular/core';
import {CommonModule, NgClass} from "@angular/common";
import {StudentInterface} from "../student.interface";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {

  @Input() content: StudentInterface = {} as StudentInterface;
}
