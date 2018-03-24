import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $("#sidebar-wrapper").hover(function(e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    // });
  }

}
