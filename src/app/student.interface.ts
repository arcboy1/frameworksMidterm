import {DatePipe} from "@angular/common";

export interface StudentInterface {
  id: number;
  name: string;
  courseCode:string;
  birthDate: Date;
  grade:string;
  profilePic:string;
}
