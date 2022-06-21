import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { clientsMock } from '../mockups/clients.mock';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input() client: any;
  isReadMore = true;
  active = "Active";
  inactive = "Inactive"
  deleted = "Deleted"
  state = ""
  constructor() { }

  ngOnInit(): void {
    if (this.client.status == 1) {
      this.client.status = this.active;
    }
    else if (this.client.status == 0) {
      this.client.status = this.deleted;
    }
    else if (this.client.status == 2) {
      this.client.status = this.inactive;
    }
  }
  myFunction() {
    this.isReadMore = !this.isReadMore
  }
}
