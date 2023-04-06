import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  listUsers!: any;
  constructor(private userService: UserService ){

  }
  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data
   });
  }

}
