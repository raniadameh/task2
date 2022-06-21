import { Component, OnInit } from '@angular/core';
import { clientsMock } from '../mockups/clients.mock';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client [] = clientsMock;
  constructor() { }


  ngOnInit(): void {
  
  }
 

}
