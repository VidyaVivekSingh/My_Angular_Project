import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', as an attribute
  // selector: '.app-servers', as a class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServer: boolean = false;
  serverCreationStatus : string = "No Server is Created..!";
  serverName = '';
  serverCreated = false;
  servers = ['test1','test2']
  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is Created Successfully..! Name of the server is " + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
