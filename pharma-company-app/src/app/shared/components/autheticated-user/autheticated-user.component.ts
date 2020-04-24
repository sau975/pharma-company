import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autheticated-user',
  templateUrl: './autheticated-user.component.html',
  styleUrls: ['./autheticated-user.component.css']
})
export class AutheticatedUserComponent implements OnInit {

  module: string;
  subMenu: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.url.subscribe(url => {
      this.module = url[0].path;
      this.getSubMenu(this.module);
      console.log(this.module);
    });
  }

  private getSubMenu(module: string): any {

    switch (module) {

      case "customerBc":
        this.subMenu = [
          { label: "Customer", route: "customers" },
        ];

      default: break;

    }
  }
}
